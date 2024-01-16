import { Controller, Get, Injectable, RouteParamMetadata, UseInterceptors, applyDecorators, assignMetadata } from "@nestjs/common";
import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { renderToPipeableStream } from 'react-dom/server'
import { createStaticRouter, createStaticHandler, StaticRouterProvider } from 'react-router-dom/server'
import { ROUTE_ARGS_METADATA } from "@nestjs/common/constants";
import { RouteParamtypes } from "@nestjs/common/enums/route-paramtypes.enum";
import { json } from "react-router-dom";

@Injectable()
class ReactSsrInterceptor implements NestInterceptor {
    constructor() {
    }

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ssrSubscription = async (value) => {
            const request = context.switchToHttp().getRequest()
            const response = context.switchToHttp().getResponse()

            if (request.path.includes('pages-api')) {
                response.json(value)
            } else {    
                const routes = Reflect.getMetadata("react_routes", process)

                const { dataRoutes, query } = createStaticHandler(routes.map((r) => { 
                    const Component = r.Component
                    return { path: r.path, element: <Component />, loader: async () => {
                        return json(value)
                    }}
                }))
    
                const routerRequest = {...request, url: process.env.BASE_URL + request.url, signal: new AbortController().signal }
                const routeContext = await query(routerRequest)
                
                if (routeContext instanceof Response) {
                    throw routeContext
                }
            
                const router = createStaticRouter(dataRoutes, routeContext)
                const routeMap = routes.reduce((acc, route) => {
                    acc[route.path] = route.name
                    return acc
                }, {})
    
                const stream = renderToPipeableStream(
                    <html>
                        <head>
                        </head>
                        <body>
                            <div id='initial-state' data-location={routeContext.location.pathname} data-state={JSON.stringify(value)} data-routes={JSON.stringify(routeMap)} style={{display: 'hidden'}}></div>
                            <div id='root'>
                                <StaticRouterProvider router={router} context={routeContext} ></StaticRouterProvider>
                            </div>
                        </body>
                    </html>,
                    {
                        bootstrapScripts: ['/public/bootstrap.js']
                    }
                )
                stream.pipe(response)
            }
            return response
        }
        return next
            .handle()
            .pipe(map(ssrSubscription))

    }
}

function UseReactSsr(path: string, Component: React.FC) {
    return function(target, key, descriptor: PropertyDescriptor) {
        const args = Reflect.getMetadata(ROUTE_ARGS_METADATA, target.constructor, key) || {};
        Reflect.defineMetadata(
            ROUTE_ARGS_METADATA,
            assignMetadata<RouteParamtypes, Record<number, RouteParamMetadata>>(
            args,
            RouteParamtypes.RESPONSE,
            99,
            ),
            target.constructor,
            key,
        );
        const routes = Reflect.getMetadata("controller_react_routes", target.constructor) || []
        routes.push({
            path,
            Component,
            name: Component.name
        })
        Reflect.defineMetadata("controller_react_routes", routes, target.constructor)
    }
}

export function Page(path: string, Component: React.FC) {
    const pathWithRoot = path.startsWith('/') ? path : '/' + path

    return applyDecorators(
        UseInterceptors(new ReactSsrInterceptor()),
        Get([pathWithRoot, pathWithRoot.endsWith('/') ? pathWithRoot + 'pages-api' : pathWithRoot + '/pages-api']),
        UseReactSsr(pathWithRoot, Component),
    )
}

function ReactSsrController(path) {
    const pathWithoutTrailingSlash = path.endsWith('/') && path !== '/' ? path.slice(1) : path
    return function(target, key, descriptor) {
        const controllerReactRoutes = Reflect.getMetadata("controller_react_routes", target)
        const routes = controllerReactRoutes.map(r => {
            return {
                ...r,
                path: (pathWithoutTrailingSlash + r.path).endsWith('/') ? pathWithoutTrailingSlash + r.path.slice(1, -1) : pathWithoutTrailingSlash + r.path
            }
        })

        Reflect.defineMetadata("react_routes", (Reflect.getMetadata("react_routes", process) || []).concat(routes), process)
    }
}

export function PageController(path = "") {
    const pathWithRoot = path.startsWith('/') ? path : '/' + path
    return applyDecorators(
        Controller(pathWithRoot),
        ReactSsrController(pathWithRoot)
    )
}
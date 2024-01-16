import React, { Suspense } from "react"
import { Outlet, RouteObject, RouterProvider, createBrowserRouter, defer, json } from 'react-router-dom'

export async function initializeApp(): Promise<React.FC> {
    const { state, location, routes } = document.getElementById("initial-state").dataset
    const parsedState = JSON.parse(state)
    const parsedRoutes = JSON.parse(routes)
    const reactRoutes: RouteObject[] = []
    for (let path of Object.keys(parsedRoutes)) {
        const ComponentName = parsedRoutes[path]
        const routeObject = {
            path
        }

        const loader = async ({ request }) => {
            const url = new URL(request.url)
            url.pathname += url.pathname.endsWith('/') ? 'pages-api' : '/pages-api'
            const res = await fetch(url)
            return res
        }

        const url = process.env.BASE_URL + '/public/scripts/' + ComponentName.toLowerCase() + '.js'

        if (path === location) {
            const module = await import(/* webpackIgnore: true */ url)
            const Component = module.default
            routeObject['element'] = <Component />
            routeObject['loader'] = loader
        } else {
            routeObject['lazy'] = async () => {
                const module = await import(/* webpackIgnore: true */ url)
                const Component = module.default
                return { element: <Component />, loader }
            }
        }

        reactRoutes.push(routeObject)
    }

    const router = createBrowserRouter(reactRoutes, {
        hydrationData: {
            loaderData: reactRoutes.reduce((acc, route, i) => {
                if (route.path === location) {
                    acc[i] = parsedState 
                } else {
                    acc[i] = undefined
                }
                return acc
            }, {})
        }
    })

    const App = () => {
        return <RouterProvider router={router} />
    }
    
    return App
}

import React from "react";

import { RouterProvider, createMemoryRouter, json } from "react-router-dom";
import { render as testRender, screen, waitFor } from '@testing-library/react'

export async function render(Component: React.FC, data: any, path: string = '/') {
    const router = createMemoryRouter([
        {
            path,
            element: <>
                <div data-testid="test-render-complete"></div>
                <Component />,
            </>,
            loader:async () => {
                return json(data)
            }
        }
    ], { initialEntries: ['/'], initialIndex: 0 })
    
    testRender(<RouterProvider router={router}></RouterProvider>)

    await waitFor(() => screen.getByTestId('test-render-complete'))
}
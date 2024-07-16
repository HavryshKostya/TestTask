import React from 'react'
import { RouterProvider } from '@tanstack/router';
import { routes } from './routes'

export const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

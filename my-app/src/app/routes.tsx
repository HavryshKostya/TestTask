import { createBrowserRouter, RouterProvider } from '@tanstack/router';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export { router as routes };
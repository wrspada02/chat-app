import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../screens/login';
import { Room } from '../screens/room';
import { NotFound } from '../screens/not-found';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

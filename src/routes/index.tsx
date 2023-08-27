import { createBrowserRouter, createHashRouter } from 'react-router-dom';
import { Login } from '../screens/login';
import { Room } from '../screens/room';
import { NotFound } from '../screens/not-found';
import { CreatingUser } from '../screens/creating-user';

export const router = createHashRouter([
  {
    path: "./",
    element: <Login />,
  },
  {
    path: "./room",
    element: <Room />,
  },
  {
    path: './user/creating',
    element: <CreatingUser />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

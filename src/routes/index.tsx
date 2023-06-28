import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../screens/login';
import { Room } from '../screens/room';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/room",
    element: <Room />,
  }
]);

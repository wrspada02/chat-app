import 'tailwindcss/tailwind.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { useReducer } from 'react';
import { User, UserActions, UserActionsReducer } from './interfaces/User';
import { userReducer } from './reducer/user';
import { LoggedUserContext } from './context/user';



export function App() {
    const [userLogged, dispatch] = useReducer(userReducer, null);
    const userValues: UserActionsReducer = {
        userLogged,
        login: (user: User) => {
            dispatch({ type: UserActions.LOGOUT, payload: user });
        },
        logout: () => {
            dispatch({ type: UserActions.LOGOUT, payload: null });
        }
    }

    return (
        <LoggedUserContext.Provider value={userValues}>
            <RouterProvider router={router}/>
        </LoggedUserContext.Provider>
    );
}
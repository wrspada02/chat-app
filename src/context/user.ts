import { createContext } from "react";
import { UserActionsReducer } from "../interfaces/User";

export const LoggedUserContext = createContext<UserActionsReducer>
  ({login: () => {}, logout: () => {}, userLogged: null});
import { LoggedUserResponse } from "../screens/creating-user/@types";

export interface User {
  login: string;
  avatar_url: string;
  url: string;
  name: string;
}

export enum UserActions {
  LOGIN,
  LOGOUT,
}

export interface UserType {
  type: UserActions;
  payload: LoggedUserResponse | null;
}

export interface UserActionsReducer {
  userLogged: LoggedUserResponse | null;
  login: (user: LoggedUserResponse) => void;
  logout: (user: null) => void;
}
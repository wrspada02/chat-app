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
  payload: User | null;
}

export interface UserActionsReducer {
  userLogged: User | null;
  login: (user: User) => void;
  logout: (user: null) => void;
}
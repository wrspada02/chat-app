import { User, UserActions, UserType } from "../interfaces/User";
import { LoggedUserResponse } from "../screens/creating-user/@types";

export const userReducer = (state: LoggedUserResponse | null, action: UserType) => {
  switch (action.type) {
      case UserActions.LOGOUT:
          return action.payload;
      
      case UserActions.LOGIN:
          return action.payload;

      default:
          return state;
  }
}
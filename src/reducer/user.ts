import { User, UserActions, UserType } from "../interfaces/User";

export const userReducer = (state: User | null, action: UserType) => {
  switch (action.type) {
      case UserActions.LOGOUT:
          return action.payload;
      
      case UserActions.LOGIN:
          return action.payload;

      default:
          return state;
  }
}
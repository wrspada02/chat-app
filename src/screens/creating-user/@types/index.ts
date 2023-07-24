import { User } from "../../../interfaces/User";

export interface LoggedUserToken {
  access_token: string;
}

export interface LoggedUserResponse {
  user: User;
  token: string;
}
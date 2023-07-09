import { useState } from "react";
import { User } from "../interfaces/User";

export function useLoggedUser() {
  const [userLogged, setUserLogged] = useState<User | null>(null);

  const login = (user: User) => {
    setUserLogged(user);
  };

  const logout = () => {
    setUserLogged(null);
  };

  return { userLogged, login, logout };
}

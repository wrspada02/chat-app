import { useState } from "react";
import { User } from "../interfaces/User";

export function useLoggedUser() {
  const [userLogged, setUserLogged] = useState<User | null>(null);

  return { userLogged, setUserLogged };
}
import { useCallback, useEffect } from "react";
import { Loading } from "../../components/loading";
import { useNavigate } from "react-router-dom";
import { useCodeQuery } from "../../hooks/useCodeQuery";
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { User } from "../../interfaces/User";
import axios from "axios";

export function CreatingUser() {
  const query = useCodeQuery();
  const navigate = useNavigate();
  const { login, userLogged } = useLoggedUser();

  const getLoggedUserToken = useCallback(async () => {
    const code = query.get("code");

      const user = await axios.post<User>
        (`http://localhost:5000/users/login/${code}`);

      if (user.data) {
        login(user.data);
      } else {
        navigate("/");
      }
  }, []);

  useEffect(() => {
    getLoggedUserToken();
  }, []);

  useEffect(() => {
    navigate("/room")
  }, [userLogged])

  return (
    <main className="flex items-center justify-center bg-[#92485b] h-[100vh] w-[100vw] transition animate-screen-to-right">
      <Loading />
    </main>
  );
}
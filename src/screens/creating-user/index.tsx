import { useCallback, useContext, useEffect } from "react";
import { Loading } from "../../components/loading";
import { useNavigate } from "react-router-dom";
import { useCodeQuery } from "../../hooks/useCodeQuery";
import axios from "axios";
import { LoggedUserContext } from "../../context/user";
import { LoggedUserResponse } from "./@types";

export function CreatingUser() {
  const query = useCodeQuery();
  const navigate = useNavigate();
  const userAuth = useContext(LoggedUserContext);

  const getLoggedUserToken = useCallback(async () => {
    const code = query.get("code");

      const user = await axios.post<LoggedUserResponse>
        (`http://localhost:5000/users/login/${code}`);

      if (user.data) {
        userAuth.login(user.data);
      } else {
        navigate("./");
      }
  }, []);

  useEffect(() => {
    getLoggedUserToken();
  }, []);

  useEffect(() => {
    navigate("./room");
  }, [userAuth.userLogged?.user]);

  return (
    <main className="flex items-center justify-center 
      bg-[#92485b] h-[100vh] w-[100vw] transition 
       animate-screen-to-right-negative">
      <Loading />
    </main>
  );
}
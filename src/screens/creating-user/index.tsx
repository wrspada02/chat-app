import { useEffect } from "react";
import { Loading } from "../../components/loading";
import { useNavigate, useParams } from "react-router-dom";
import { useCodeQuery } from "../../hooks/useCodeQuery";
import { LoggedUserToken } from "./@types";
import api from '../../service';
import { useLoggedUser } from "../../hooks/useLoggedUser";
import { User } from "../../interfaces/User";

export function CreatingUser() {
  const query = useCodeQuery();
  const navigate = useNavigate();
  const { setUserLogged } = useLoggedUser();

  const getLoggedUserToken = async () => {
    const code = query.get("code");

    try {
      const user = await api.post<User>
        (`http://localhost:5000/users/create/${code}`);

      if (user.data) {
        setUserLogged(user.data);
        navigate("/room");
      }
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getLoggedUserToken();
  }, []);

  return (
    <main className="flex items-center justify-center bg-[#92485b] h-[100vh] w-[100vw] transition animate-screen-to-right">
      <Loading />
    </main>
  );
}
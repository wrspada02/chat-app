import { useEffect } from "react";
import { Loading } from "../../components/loading";
import { useNavigate, useParams } from "react-router-dom";
import { useCodeQuery } from "../../hooks/useCodeQuery";
import { LoggedUserToken } from "./@types";
import api from '../../service';
import { useLoggedUser } from "../../hooks/useLoggedUser";

export function CreatingUser() {
  const query = useCodeQuery();
  const navigate = useNavigate();
  const [, setUserLogged] = useLoggedUser();

  const getLoggedUserToken = async () => {
    const body = {
      client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
      client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
      code: query.get("code"),
    }
    // TO DO: Call back-end to get user and create on database
    try {
      const userToken = await api.post<LoggedUserToken>
        ("https://github.com/login/oauth/access_token", body);

      return userToken.data.access_token;
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
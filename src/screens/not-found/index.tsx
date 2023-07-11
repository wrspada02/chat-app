import { useNavigate } from "react-router-dom";
import NotFoundImg from '../../assets/not_found_01.webp';
import { useContext, useEffect } from "react";
import { LoggedUserContext } from "../../context/user";

export function NotFound() {
  const navigate = useNavigate();
  const userLogged = useContext(LoggedUserContext);

  const handleNavigateToPreviousPage = () => {
    navigate("/");
  }

  useEffect(() => {
    if (!userLogged.userLogged) return; 
    navigate("/room");
  }, [userLogged.userLogged]);

  return ( 
    <main className="flex items-center justify-center w-[100vw] h-[100vh] bg-[#785BD7] animate-screen-to-right">
      <section className="flex flex-col mobile:justify-center mobile:gap-5 tablet:justify-between bg-white w-[70vw] h-[65vh] tablet:p-12 mobile:p-0">
        <div>
          <h1 className="desktop:text-8xl tablet:text-7xl tablet:text-left mobile:text-5xl mobile:text-center">Oops!!</h1>
          <h2 className="desktop:text-6xl tablet:text-5xl tablet:text-left mobile:text-3xl mobile:text-center">Page not found</h2>
        </div>
        <div className="flex items-end justify-around">
          <button onClick={handleNavigateToPreviousPage} className="shadow-md hover:opacity-[0.7] transition w-[50%] min-w-[20vw] h-10 bg-slate-400 font-semibold">Return</button>
          <img src={NotFoundImg} className="mobile:hidden desktop:block float-right max-w-fit" alt="Not found image" />
        </div>
      </section>
    </main>
  );
}
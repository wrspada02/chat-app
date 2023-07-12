import { useContext, useEffect } from "react";
import { LoggedUserContext } from "../../context/user";
import { WelcomeModalProps } from "./@types";

export function WelcomeModal({ handleClose }: WelcomeModalProps) {
  const userLogged = useContext(LoggedUserContext);

  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (event.code === 'Enter') {
        handleClose();
      }
    });

    return () => {
      document.removeEventListener('keydown', () => {});
    }
  }, []);

  return(
    <section className="top-0 left-0 absolute bg-black opacity-80
       w-[100vw] h-[100vh] flex justify-center align-center">
      <article className="p-10 w-[65vw] h-[55vh] bg-[url('/src/assets/bg-confetti.avif')]
       bg-no-repeat rounded-lg bg-cover backdrop-blur-sm m-auto desktop:flex 
       desktop:justify-around desktop:align-center mobile:flex mobile:flex-col 
       mobile:justify-center mobile:align-center">
        <div>
          <img src={userLogged.userLogged?.avatar_url} className="rounded-full max-w-[300px]
             object-contain mobile:m-auto" 
            alt="Github image person" />
        </div>
        <div className="flex flex-col justify-center align-center">
          <p className="text-lg mobile:text-center">Welcome on board</p>
          <button className="p-5 font-semibold rounded-md
            bg-orange-400 text-center shadow-md
              transition-all hover:shadow-none hover:opacity-90" onClick={() => handleClose()}>Let's go</button>
        </div>
      </article>
    </section>
  );
}
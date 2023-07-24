import { useContext, useEffect } from "react";
import { LoggedUserContext } from "../../context/user";
import { WelcomeModalProps } from "./@types";

export function WelcomeModal({ handleClose }: WelcomeModalProps): JSX.Element {
  const userAuth = useContext(LoggedUserContext);

  const handleCloseByEscButton = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEscButton);

    return () => {
      document.removeEventListener('keydown', handleCloseByEscButton);
    }
  }, []);

  return(
    <section className="top-0 left-0 absolute bg-black opacity-80
       w-[100vw] h-[100vh] flex justify-center align-center">
      <article className="p-10 bg-[url('/src/assets/bg-confetti.avif')]
       bg-no-repeat rounded-lg bg-cover backdrop-blur-sm m-auto desktop:flex 
       desktop:justify-around desktop:align-center animate-pulse
       mobile:flex mobile:flex-col mobile:justify-center mobile:align-center">
        <div>
          <img src={userAuth.userLogged?.user.avatar_url || ''} className="rounded-full 
          desktop:max-w-[150px] object-contain mobile:m-auto mobile:max-w-[100px]" 
            alt="Github image person" />
        </div>
        <div className="flex flex-col justify-center align-center">
          <p className="text-2xl font-semibold break-words mobile:text-center">Welcome on board</p>
          <button className="p-5 font-semibold rounded-md
            bg-orange-400 text-center shadow-md max-w-[200px] m-auto
              transition-all hover:shadow-none hover:opacity-90" onClick={() => handleClose()}>Let's go</button>
        </div>
      </article>
    </section>
  );
}
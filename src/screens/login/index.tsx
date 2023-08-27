import { useContext, useEffect } from "react";
import { GroupMembersIcon } from "../../components/group-members-icon";
import { LoginButton } from "../../components/login-button";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../context/user";

export function Login() {  
    const navigate = useNavigate();
    const userAuth = useContext(LoggedUserContext);

    useEffect(() => {
        if (!userAuth.userLogged) return;
        navigate("./room");
    }, [userAuth.userLogged?.user]);
      
    return (
        <main className="bg-[#785BD7] min-w-[100vw] min-h-[100vh] animate-opacity">
            <article className="desktop:w-[500px] tablet:w-[350px] tablet:block absolute left-10 top-32 hover:opacity-[0.7] transition mobile:hidden">
                <header className="h-[50px] bg-[#D9D9D9] flex items-center justify-between p-2">
                    <h2 className="text-xl h-max">College Group</h2>
                    <GroupMembersIcon isButtonClickable={false} />
                </header>
                <section className="h-[400px] bg-[#555555]">
                    <article className="p-3">
                        <figure className="flex items-center">
                            <div className="h-14 w-14 bg-black rounded-full min-w-[56px]"></div>
                            <figcaption className="p-3 flex flex-col justify-center text-white">
                                <p>William</p>
                                <p>Hello, How's it going?</p>
                            </figcaption>
                        </figure>
                    </article>
                </section>
            </article>
            <section className="tablet:min-h-[100vh] tablet:max-w-[35vw] tablet:bg-[#D9D9D9] tablet:float-right
                mobile:w-full mobile:bg-[#785BD7] mobile:pt-52">
                <h1 className="text-center drop-shadow-lg pt-20 tablet:text-[#785BD7] font-bold tablet:text-6xl font-[Sarpanch]
                    mobile:text-5xl mobile:text-[#D9D9D9]">Sign In</h1>
                <hr className="tablet:hidden mobile:block mobile:w-[50vw] mobile:m-auto mobile:bg-[#CCCCCC] mobile:h-[2px] mobile:mt-6" />
                <div className="flex pt-20 tablet:gap-10 tablet:flex-col tablet:max-w-[20vw] m-auto mobile:gap-8 mobile:justify-center">
                    <LoginButton loginMode="github" url={`https://github.com/login/oauth/authorize?scope=user:
                        email&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`} />
                </div>
            </section>
        </main>
    );
}
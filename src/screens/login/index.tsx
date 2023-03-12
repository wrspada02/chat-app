import { LoginButton } from "../../components/login-button";

export function Login() {
    return (
        <main className="bg-[#785BD7] min-w-[100vw] min-h-[100vh] flex justify-center items-center">
            <section className="desktop:bg-[#CCCCCC] flex flex-col items-center 
                justify-evenly desktop:gap-40 desktop:px-40 desktop:py-5 desktop:rounded-md">
                <div>
                    <h1 className="text-[90px] text-center text-[#883995] font-['Sarpanch'] drop-shadow-2xl mobile:text-white">Chat App</h1>
                    <h2 className="text-[75px] text-center font-['Sarpanch'] box-border">Sign In</h2>
                </div>
                <div className="flex desktop:flex-col desktop:gap-10">
                    <LoginButton loginMode="github" />
                    <LoginButton loginMode="google" />
                </div>
            </section>
        </main>
    );
}
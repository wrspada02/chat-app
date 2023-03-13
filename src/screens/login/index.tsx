import { LoginButton } from "../../components/login-button";

export function Login() {
    return (
        <main className="bg-[#785BD7] min-w-[100vw] min-h-[100vh] flex justify-center items-center">
            <section className="flex flex-col items-center justify-evenly 
                desktop:gap-40 desktop:bg-[#CCCCCC] desktop:px-40 desktop:py-5 desktop:rounded-md
                tablet:gap-20 tablet:bg-[#CCCCCC] tablet:px-20 tablet:py-2 tablet:rounded-md
                mobile:gap-20">
                <div>
                    <h1 className=" text-center drop-shadow-lg font-['Sarpanch']
                        desktop:text-8xl desktop:text-[#883995]
                        tablet:text-[#883995]
                        mobile:text-5xl mobile:text-white">Chat App</h1>
                    <h2 className="text-center font-['Sarpanch'] drop-shadow-lg
                        desktop:text-7xl
                        mobile:text-4xl">Sign In</h2>
                </div>
                <hr className="desktop:hidden mobile:block mobile:w-full mobile:bg-[#CCCCCC] mobile:h-1" />
                <div className="flex desktop:flex-col desktop:gap-10 mobile:gap-8">
                    <LoginButton loginMode="github" />
                    <LoginButton loginMode="google" />
                </div>
            </section>
        </main>
    );
}
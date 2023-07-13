import { GroupMessage } from "../../components/group-message";
import { GroupMembersIcon } from "../../components/group-members-icon";
import { InputMessage } from "../../components/input-message";
import { Sidebar } from "../../components/sidebar";
import { GroupRoomsIcon } from "../../components/group-rooms-icon";
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../context/user";
import { WelcomeModal } from "../../components/welcome-modal";

export function Room() {
    const navigate = useNavigate();
    const userLogged = useContext(LoggedUserContext);
    const [isModalWelcomeOpen, setIsModalWelcomeOpen] = useState<boolean>(true);

    useEffect(() => {
        if (userLogged.userLogged) return;
        navigate("/");
    }, [userLogged.userLogged]);

    return(
        <>
        <main className="flex min-h-screen min-w-screen animate-opacity">
            <Sidebar style="tablet:min-h-full tablet:min-w-[20vw] mobile:hidden desktop:block" />
            <section className="min-w-min flex-1 flex flex-col">
                <header className="bg-[#FCFCFC] flex items-center justify-between p-5">
                    <GroupRoomsIcon style="mobile:block desktop:hidden" />
                    <h2 className="mobile:text-lg tablet:text-lg desktop:text-xl"> Group of programmers</h2>
                    <GroupMembersIcon />
                </header>
                <section className="bg-[#555555] flex flex-col justify-end flex-1 px-5 py-5">
                    <section>
                        <GroupMessage />
                        <GroupMessage />
                        <GroupMessage />
                    </section>
                    <InputMessage placeholder="Type the message..." />
                </section>
            </section>
        </main>
        {isModalWelcomeOpen ? (
            <WelcomeModal handleClose={() => {
                setIsModalWelcomeOpen(false);
        }}/>) : null}
        </>
    );
}
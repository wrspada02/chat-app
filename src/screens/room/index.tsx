import { GroupMessage } from "../../components/group-message";
import { GroupMembersIcon } from "../../components/group-members-icon";
import { InputMessage } from "../../components/input-message";
import { Sidebar } from "../../components/sidebar";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../context/user";
import { WelcomeModal } from "../../components/welcome-modal";
import { JoinRoomModal } from "../../components/room-modal";
import { HandleRoomModal } from "./@types";

export function Room() {
    const navigate = useNavigate();
    const userAuth = useContext(LoggedUserContext);
    const [isModalWelcomeOpen, setIsModalWelcomeOpen] = useState<boolean>(true);
    const [roomModal, setRoomModal] = useState<HandleRoomModal>({
        isOpenModalCreateJoinRoom: false,
    });
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

    useEffect(() => {
        if (userAuth.userLogged) return;
        navigate("/");
    }, [userAuth.userLogged?.user]);

    return(
        <>
        <main className="flex min-h-screen min-w-screen animate-opacity overflow-hidden">
            <Sidebar style="tablet:min-h-full tablet:min-w-[20vw] flex-1" 
                onClickButton={(typeRoom) => {
                    setRoomModal({
                        isOpenModalCreateJoinRoom: true,
                        room: typeRoom,
                    });
                }}
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
            />
            <section className={`${isOpenSidebar && `mobile:hidden`} flex flex-1 flex-col`}>
                <header className="bg-[#FCFCFC] flex items-center justify-between p-5">
                    <h2 className="mobile:text-lg tablet:text-lg desktop:text-xl"> Group of programmers</h2>
                    <GroupMembersIcon />
                </header>
                <section className="bg-[#555555] flex flex-1 flex-col justify-end px-5 py-5">
                    <section>
                        <GroupMessage />
                        <GroupMessage />
                        <GroupMessage />
                    </section>
                    <InputMessage placeholder="Type the message..." />
                </section>
            </section>
        </main>
        {isModalWelcomeOpen && (
            <WelcomeModal handleClose={() => {
                setIsModalWelcomeOpen(false);
        }}/>)}
        {roomModal.isOpenModalCreateJoinRoom && roomModal.room && (
            <JoinRoomModal typeRoom={roomModal.room} handleClose={() => {
                setRoomModal({...roomModal, isOpenModalCreateJoinRoom: false });
            }} />
        )}
        </>
    );
}
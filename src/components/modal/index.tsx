import { GroupMessage } from "../group-message";
import { BsArrowBarRight } from 'react-icons/bs';
import { ModalProps } from "./@types";
import { useContext, useState } from "react";
import { RoomDto } from "../../interfaces/Room";
import { SelectedRoomContext } from "../../context/selectedRoom";

export function Modal({ handleCloseModal, isOpenCloseModal }: ModalProps) {
    const [isAnimationCloseOn, setIsAnimationCloseOn] = useState<boolean>(false);
    const room = useContext<RoomDto | null>(SelectedRoomContext);

    return (
        <section className={`bg-[#785BD7] top-3 p-3 absolute overflow-y-auto
            rounded-xl shadow-2xl right-3 max-h-[60vh] animate-screen-to-right-negative
            ${isAnimationCloseOn && `animate-screen-to-right-positive opacity-0`}`}
            onAnimationEnd={() => {
                if (isOpenCloseModal && isAnimationCloseOn) {
                    handleCloseModal();
                }
            }}>
            <header>
                <button onClick={() => {
                    setIsAnimationCloseOn(!isAnimationCloseOn);
                }} 
                className={`float-right max-w-[30px] hover:opacity-80 
                    bg-white p-2 ease-in duration-300 cursor-pointer`}>
                    <BsArrowBarRight />
                </button>
            </header>
            <article className="flex flex-col gap-1 mt-3">
                {room?.group_people.map((person, index) => (
                    <GroupMessage content={''} sender={person} key={index} />
                ))}
            </article>
        </section>
    );
}
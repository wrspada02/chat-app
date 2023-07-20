import { GroupMessage } from "../group-message";
import { BsArrowBarRight } from 'react-icons/bs';
import { ModalProps } from "./@types";

export function Modal({ handleCloseModal, isOpenCloseModal }: ModalProps) {
    return (
        <section className={`bg-[#785BD7] top-3 p-3 absolute overflow-y-scroll
            rounded-xl shadow-2xl right-3 max-h-[60vh] 
            ${isOpenCloseModal ? `animate-open_to_bottom` : `animate-screen-to-right`}`}
            onAnimationEnd={() => {
                if (isOpenCloseModal) return;
                handleCloseModal();
            }}>
            <header>
                <button onClick={() => handleCloseModal()} 
                className={`float-right max-w-[30px] hover:opacity-80 
                    bg-white p-2 ease-in duration-300 cursor-pointer`}>
                    <BsArrowBarRight />
                </button>
            </header>
            <article className="flex flex-col gap-1 mt-3">
                <GroupMessage />
                <GroupMessage />
                <GroupMessage />
            </article>
        </section>
    );
}
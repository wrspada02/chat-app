import { GroupMessage } from "../group-message";
import CloseModalIcon from "../../assets/close_button.svg";
import { ModalProps } from "./@types";

export function Modal({ handleCloseModal,
     style, closeModalPosition }: ModalProps) {
    return (
        <section className={`bg-[#785BD7] top-3 p-3 absolute min-h-[80vh] 
            rounded-xl animate-open_to_bottom shadow-lg max-h-screen ${style}`}>
            <header>
                <img src={CloseModalIcon} alt="Close modal Icon"
                  onClick={() => handleCloseModal()} className={`${closeModalPosition} max-w-[30px]
                  hover:opacity-80 ease-in duration-300 cursor-pointer`}/>
            </header>
            <article className="flex flex-col gap-1 mt-3">
                <GroupMessage />
                <GroupMessage />
                <GroupMessage />
            </article>
        </section>
    );
}
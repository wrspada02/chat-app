import { GroupMessage } from "../group-message";
import CloseModalIcon from "../../assets/close_button.svg";
import { ModalProps } from "./@types";

export function Modal({ handleCloseModal }: ModalProps) {
    return (
        <section className={`bg-[#785BD7] top-3 p-3 absolute overflow-y-scroll
            rounded-xl animate-open_to_bottom shadow-lg max-h-[60vh]`}>
            <header>
                <img src={CloseModalIcon} alt="Close modal Icon"
                  onClick={() => handleCloseModal()} className={`float-right max-w-[30px]
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
import { GroupMessage } from "../group-message";
import CloseModal from "../../assets/close_button.svg";
import { GroupMembersModalProps } from "./@types";

export function GroupMembersModal({ handleCloseModal }: GroupMembersModalProps) {
    return (
        <section className="bg-[#785BD7] p-3 absolute top-3 right-2 min-h-[80vh] 
            rounded-xl animate-group-members max-h-screen">
            <header>
                <img src={CloseModal} alt="Close modal Icon"
                  onClick={() => handleCloseModal()} className="float-right max-w-[30px]
                  hover:opacity-80 ease-in duration-300 cursor-pointer"/>
            </header>
            <article className="flex flex-col gap-1 mt-3">
                <GroupMessage />
                <GroupMessage />
                <GroupMessage />
            </article>
        </section>
    );
}
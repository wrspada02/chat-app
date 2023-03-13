import { useCallback, useState } from "react";
import HamburgerMenuIcon from "../../assets/hamburger_icon.svg";
import { Modal } from "../group-members";
import { GroupRoomProps } from "./@types";

export function GroupRoomsIcon({ style }: GroupRoomProps) {
    const [isGroupMembersModalActive, setIsGroupMembersModalActive] 
    = useState<boolean>(false);

const handleCloseModal = useCallback(() => {
    setIsGroupMembersModalActive(false);
}, [isGroupMembersModalActive]);
    
    return(
        <>
            <img src={HamburgerMenuIcon} className={`min-w-[40px] min-h-[40px] h-7 w-7
                hover:opacity-80 ease-in duration-300 cursor-pointer` + style} alt="Hamburger Rooms Icon"
                onClick={() => setIsGroupMembersModalActive(true)} />

            {isGroupMembersModalActive && (
                <Modal 
                    closeModalPosition="float-left" 
                    style="left-2" 
                    handleCloseModal={handleCloseModal} 
                />
            )}
        </>
    );
}
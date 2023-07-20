import { useCallback, useState } from "react";
import { Modal } from "../modal";
import { GroupMembersIconProps } from "./@types";

export function GroupMembersIcon({ isButtonClickable = true }: GroupMembersIconProps) {
    const [isGroupMembersModalActive, setIsGroupMembersModalActive] 
        = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsGroupMembersModalActive(false);
    }, [isGroupMembersModalActive]);

    const handleOpenModal = useCallback(() => {
        if (!isButtonClickable) return;

        setIsGroupMembersModalActive(true);
    }, [isGroupMembersModalActive]);
    
    return (
        <>
            <i className="min-w-[40px] min-h-[40px] w-10 h-10 rounded-full bg-[#555555] 
                text-white flex justify-center items-center text-sm
                hover:opacity-80 ease-in duration-300 cursor-pointer"
                onClick={handleOpenModal}>
                <span className="m-auto">i</span>
            </i>

            {isGroupMembersModalActive && (
                <Modal
                    handleCloseModal={handleCloseModal}
                    isOpenCloseModal={isGroupMembersModalActive}
                />
            )}
        </>
    );
}
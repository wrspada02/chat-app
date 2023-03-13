import { useCallback, useState } from "react";
import { Modal } from "../group-members";

export function GroupMembersIcon() {
    const [isGroupMembersModalActive, setIsGroupMembersModalActive] 
        = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsGroupMembersModalActive(false);
    }, [isGroupMembersModalActive]);
    return (
        <>
            <i className="min-w-[40px] min-h-[40px] w-10 h-10 rounded-full bg-[#555555] 
                text-white flex justify-center items-center text-sm
                hover:opacity-80 ease-in duration-300 cursor-pointer"
                onClick={() => setIsGroupMembersModalActive(true)}>
                <span className="m-auto">i</span>
            </i>

            {isGroupMembersModalActive && (
                <Modal 
                    closeModalPosition="float-right" 
                    style="right-2" 
                    handleCloseModal={handleCloseModal}
                />
            )}
        </>
    );
}
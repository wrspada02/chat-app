import { useCallback, useState } from "react";
import { GroupMembersModal } from "../group-members";

export function HeaderIcon() {
    const [isGroupMembersModalActive, setIsGroupMembersModalActive] 
        = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setIsGroupMembersModalActive(false);
    }, [isGroupMembersModalActive])
    return (
        <>
            <i className="w-10 h-10 rounded-full bg-[#555555] 
                text-white flex justify-center items-center text-sm
                hover:opacity-80 ease-in duration-300 cursor-pointer"
                onClick={() => setIsGroupMembersModalActive(true)}>
                <span className="m-auto">i</span>
            </i>

            {isGroupMembersModalActive && (
                <GroupMembersModal handleCloseModal={handleCloseModal} />
            )}
        </>
    );
}
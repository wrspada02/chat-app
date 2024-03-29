import { RoomDto } from "../../../interfaces/Room";
import { TypeHandleModalRoom } from "../../../screens/room/@types";

export interface SidebarProps {
    style: string;
    onClickButton: (typeRoom: TypeHandleModalRoom) => void;
    isOpenSidebar: boolean;
    setIsOpenSidebar: (isOpenSidebar: boolean) => void;
    rooms: RoomDto[];
    onSelectRoom: (room_id: string) => void;
    selectedRoom: string;
}
import { TypeHandleModalRoom } from "../../../screens/room/@types";

export interface SidebarProps {
    style: string;
    onClickButton: (typeRoom: TypeHandleModalRoom) => void;
}
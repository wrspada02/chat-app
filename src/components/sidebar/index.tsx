import { GroupMessage } from "../group-message";
import { SidebarProps } from "./@types";

export function Sidebar({ style }: SidebarProps) {
    return (
        <aside className={`bg-[#785BD7] py-12 px-8 ${style}`}>
            <GroupMessage />
        </aside>
    );
}
import { GroupMessage } from "../group-message";
import { SidebarProps } from "./@types";

export function Sidebar({ style, onClickButton }: SidebarProps) {
    return (
        <aside className={`desktop:flex flex-col justify-between align-center 
            bg-[#785BD7] py-12 px-8 ${style}`}>
            <ul>
                <li>
                    <GroupMessage />
                </li>
            </ul>
            <ul className="flex flex-col justify-between align-center gap-3">
                <li className="flex-1">
                    <button className="bg-[#8A2F2F] font-semibold w-full text-white p-4 shadow-md
                        transition-all hover:shadow-none hover:opacity-75" onClick={() => {
                            onClickButton('create');
                        }}>Create Room</button>
                </li>
                <li className="flex-1">
                    <button className="bg-[#5CCA75] font-semibold w-full text-white p-4 shadow-md
                        transition-all hover:shadow-none hover:opacity-75" onClick={() => {
                            onClickButton('join');
                        }}>Join a Room</button>
                </li>
            </ul>
        </aside>
    );
}
import { GroupMessage } from "../group-message";
import { SidebarProps } from "./@types";
import { CgMenuMotion } from 'react-icons/cg';
import { BsArrowBarLeft } from 'react-icons/bs';

export function Sidebar({ onClickButton, isOpenSidebar, setIsOpenSidebar }: SidebarProps) {
    return (
        <aside className={`${isOpenSidebar ? `mobile:min-w-[100vw]` : `mobile:w-max`} desktop:flex 
        flex-col justify-between align-center bg-[#785BD7] mobile:py-8
        mobile:px-4 tablet:py-12 tablet:px-8`}>
            <button className="desktop:hidden bg-white p-3 left-20 
                flex shadow-md" 
                onClick={() => {
                    setIsOpenSidebar(!isOpenSidebar);
                }}>
                {isOpenSidebar ? <BsArrowBarLeft /> : <CgMenuMotion />}
            </button>
            <ul className={`${isOpenSidebar ? `mobile:block` : 
                `mobile:hidden `}desktop:block`}>
                <li>
                    <GroupMessage />
                </li>
            </ul>
            <ul className={`${isOpenSidebar ? `mobile:flex` : `mobile:hidden`} 
            desktop:flex flex-col justify-between align-center gap-3`}>
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
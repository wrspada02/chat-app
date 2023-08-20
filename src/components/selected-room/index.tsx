import axios from "axios";
import { useContext } from "react";
import { GroupMembersIcon } from "../group-members-icon";
import { GroupMessage } from "../group-message";
import { InputMessage } from "../input-message";
import { SelectedRoomProps } from "./@types";
import { SelectedRoomContext } from "../../context/selectedRoom";
import { RoomDto } from "../../interfaces/Room";
import { LoggedUserContext } from "../../context/user";

export function SelectedRoom({ isOpenSidebar }: SelectedRoomProps) {
  const room = useContext<RoomDto | null>(SelectedRoomContext);
  const userAuth = useContext(LoggedUserContext);

  const handleSendMessage = async (message: string) => {
    try {
      await axios.put(
        `http://localhost:5000/rooms/room/${room?.room_id}/message`, 
        { message },
        { headers: { Authorization: userAuth.userLogged?.token }})
    } catch (e) {}
  };

  return (
    <section className={`${isOpenSidebar && `mobile:hidden`} flex flex-1 flex-col max-h-[100dvh]`}>
      <header className="bg-[#FCFCFC] flex items-center justify-between p-5">
          <h2 className="mobile:text-lg tablet:text-lg desktop:text-xl">{room?.room_id}</h2>
          <GroupMembersIcon />
      </header>
      <section className="bg-[#555555] flex flex-1 flex-col justify-end px-5 py-5 overflow-auto">
          <section className="overflow-auto">
            {room?.messages.length ? room.messages.map((message, index) => (
              <GroupMessage {...message} key={index} />
            )) : ''}
          </section>
          <InputMessage placeholder="Type the message..." onSendMessage={handleSendMessage} />
      </section>
    </section>
  );
}
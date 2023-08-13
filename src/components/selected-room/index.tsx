import { GroupMembersIcon } from "../group-members-icon";
import { GroupMessage } from "../group-message";
import { InputMessage } from "../input-message";
import { SelectedRoomProps } from "./@types";

export function SelectedRoom({ isOpenSidebar, room }: SelectedRoomProps) {
  return (
    <section className={`${isOpenSidebar && `mobile:hidden`} flex flex-1 flex-col`}>
      <header className="bg-[#FCFCFC] flex items-center justify-between p-5">
          <h2 className="mobile:text-lg tablet:text-lg desktop:text-xl">{room.room_id}</h2>
          <GroupMembersIcon />
      </header>
      <section className="bg-[#555555] flex flex-1 flex-col justify-end px-5 py-5">
          <section>
            {room.messages.length && room.messages.map((message, index) => (
              <GroupMessage {...message} key={index} />
            ))}
          </section>
          <InputMessage placeholder="Type the message..." />
      </section>
    </section>
  );
}
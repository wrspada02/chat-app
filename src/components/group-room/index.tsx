import { RoomDto } from "../../interfaces/Room";

export function GroupRoom(room: RoomDto) {
  return (
    <div className="flex flex-col hover:opacity-60 hover:cursor-pointer">
      <h3 className="font-medium text-white">{room.room_id}</h3>
      <p className="font-light">{room.group_people.length} people</p>
    </div>
  );
};
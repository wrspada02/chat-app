import { GroupRoomProps } from "./@types";

export function GroupRoom({ isActive, room}: GroupRoomProps) {
  return (
    <div className="flex flex-col hover:opacity-60 hover:cursor-pointer">
      <h3 className={`font-medium text-white ${isActive ? 'bg-[#555555] rounded' : ''}`}>{room.room_id}</h3>
      <p className="font-light">{room.group_people?.length || 0} people</p>
    </div>
  );
};
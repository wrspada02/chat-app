interface UserRoom {
  login: string;
  avatar_url: string;
}

interface RoomMessage {
  content: string;
  sender: UserRoom;
}

export interface RoomDto {
  _id: string;
  messages: RoomMessage[];
  owner: UserRoom;
  group_people: UserRoom[];
  max_users: number;
  room_id: string;
  is_private: boolean;
  password?: string;
}
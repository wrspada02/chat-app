export type TypeHandleModalRoom = 'create' | 'join';

export interface HandleRoomModal {
  room?: TypeHandleModalRoom;
  isOpenModalCreateJoinRoom: boolean;
}
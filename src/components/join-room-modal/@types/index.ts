import { z } from "zod";
import { TypeHandleModalRoom } from "../../../screens/room/@types";

export interface JoinRoomModalProps {
  isJoinRoom: TypeHandleModalRoom;
  handleClose: () => void;
}

export const roomSchema = z.object({
  is_private: z.boolean()
  .describe('Private room is not able to access without a password'),
  room_id: z.string()
  .describe('The name of the room')
  .min(5),
  room_password: z.string()
  .describe('The password for a private room')
  .min(8),
}).required();

export type Room = z.infer<typeof roomSchema>;
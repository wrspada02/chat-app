import { createContext } from "react";
import { RoomDto } from "../interfaces/Room";

export const SelectedRoomContext = createContext<RoomDto | null>(null);

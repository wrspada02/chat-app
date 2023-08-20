import axios from "axios";
import { GroupMessage } from "../../components/group-message";
import { GroupMembersIcon } from "../../components/group-members-icon";
import { InputMessage } from "../../components/input-message";
import { Sidebar } from "../../components/sidebar";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoggedUserContext } from "../../context/user";
import { WelcomeModal } from "../../components/welcome-modal";
import { JoinRoomModal } from "../../components/room-modal";
import { HandleRoomModal } from "./@types";
import { RoomDto } from "../../interfaces/Room";
import { SelectedRoom } from "../../components/selected-room";
import { SelectedRoomContext } from "../../context/selectedRoom";
import { io } from "socket.io-client";

export function Room() {
    const navigate = useNavigate();
    const socket = io("http://localhost:5000");
    const userAuth = useContext(LoggedUserContext);
    const [isModalWelcomeOpen, setIsModalWelcomeOpen] = useState<boolean>(true);
    const [roomModal, setRoomModal] = useState<HandleRoomModal>({
        isOpenModalCreateJoinRoom: false,
    });
    const [roomsByUser, setRoomsByUser] = useState<RoomDto[]>([]);
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
    const [selectedRoom, setSelectedRoom] = useState<string>('');

    const getRoomsByUser = useCallback(async () => {
        try {
            const rooms = await axios.get<RoomDto[]>("http://localhost:5000/rooms/room/user", 
            { headers: { Authorization: userAuth.userLogged?.token }});

            setRoomsByUser(rooms.data);
        } catch (e) {
            navigate("/");
        }
    }, [userAuth.userLogged?.token]);

    useEffect(() => {
        getRoomsByUser();
    }, []);

    useEffect(() => {
        socket.on('add-message-user', (arg: RoomDto) => {
            const newRooms = roomsByUser.map((room) => {
                if (room.room_id === arg.room_id) return arg;

                return room;
            });

            setRoomsByUser(newRooms);
        });
    }, []);

    return(
        <>
        <main className="flex min-h-screen min-w-screen animate-opacity overflow-hidden">
            <Sidebar rooms={roomsByUser} style="tablet:min-h-full tablet:min-w-[20vw] flex-1" 
                onClickButton={(typeRoom) => {
                    setRoomModal({
                        isOpenModalCreateJoinRoom: true,
                        room: typeRoom,
                    });
                }}
                isOpenSidebar={isOpenSidebar}
                setIsOpenSidebar={setIsOpenSidebar}
                onSelectRoom={(room_id) => {
                    setSelectedRoom(room_id);
                }}
                selectedRoom={selectedRoom}
                key={selectedRoom}
            />
            {selectedRoom ? (
                <SelectedRoomContext.Provider value={
                    roomsByUser.find((room) => room.room_id 
                    === selectedRoom) as RoomDto}>
                    <SelectedRoom 
                        isOpenSidebar={isOpenSidebar}
                    />
                </SelectedRoomContext.Provider>
            ) : (
                <div className="bg-slate-500 p-5 flex justify-center items-center w-full">
                    <p>No room selected</p>
                </div>
            )}
            
        </main>
        {isModalWelcomeOpen && (
            <WelcomeModal handleClose={() => {
                setIsModalWelcomeOpen(false);
        }}/>)}
        {roomModal.isOpenModalCreateJoinRoom && roomModal.room && (
            <JoinRoomModal typeRoom={roomModal.room} handleClose={() => {
                setRoomModal({...roomModal, isOpenModalCreateJoinRoom: false });
            }} />
        )}
        </>
    );
}
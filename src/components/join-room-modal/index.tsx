import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { JoinRoomModalProps, Room, roomSchema } from "./@types";

export function JoinRoomModal({ isJoinRoom, handleClose }: JoinRoomModalProps) {
  const [room, setRoom] = useState<Room>({
    is_private: false,
    room_id: '',
    room_password: '',
  });

  const roomTitles = useMemo(() => {
    return {
      modalTitle: ['join'].includes(isJoinRoom) ? 'Join into a Room' : 'Create a room',
      buttonTitle: ['join'].includes(isJoinRoom) ? 'Join' : 'Create',
    };

  }, [isJoinRoom]);

  const handleSubmitRoomForm = useCallback((event: FormEvent) => {
    event.preventDefault();

    console.log(roomSchema.parse(room));
  }, [room]);

  const handleCloseByEscButton = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEscButton);

    return () => {
      document.removeEventListener('keydown', handleCloseByEscButton);
    }
  }, []);
  
  return (
    <section className="absolute top-0 left-0 bg-black bg-opacity-70
      w-[100vw] h-[100vh] flex items-center justify-center">
      <form className="mobile:p-5 desktop:p-16 mobile:gap-2 bg-[#D9D9D9] 
        animate-pulse rounded-md" onSubmit={handleSubmitRoomForm}>
        <header className="flex items-center justify-between h-5">
          <h2 className="text-2xl font-bold text-[#785BD7]">{roomTitles.modalTitle}</h2>
          <button className="text-2xl" onClick={handleClose}>&#x2715;</button>
        </header>
        <article className="mobile:flex mobile:flex-wrap mobile:p-2 mobile:gap-3 mobile:flex-col 
          tablet:items-center tablet:justify-between tablet:gap-5 tablet:p-8 desktop:flex-row">
            <div className="flex gap-3">
                <label className="text-[#785BD7] font-semibold">Is Private?</label>
                <input type="checkbox" checked={room?.is_private} 
                  onChange={(inputValue) => {
                    setRoom({ 
                      ...room, 
                      is_private: inputValue.target.checked || false,
                    });
                  }} />
            </div>
            <div className="flex flex-col">
              <label className="text-[#785BD7] font-semibold">Room ID</label>
              <input type="text" className="shadow-md outline-none p-1" 
                placeholder="Type the ID..." value={room?.room_id}
                  onChange={(inputValue) => {
                    setRoom({
                      ...room, 
                      room_id: inputValue.target.value || '',
                    });
                  }} />
            </div>
            <div className="flex flex-col">
              <label className="text-[#785BD7] font-semibold">Room Password</label>
              <input type="text" className="shadow-md outline-none p-1 transition-all" 
                placeholder="Type the password..." value={room?.room_password} 
                  onChange={(inputValue) => {
                    setRoom({
                      ...room, 
                      room_password: inputValue.target.value || '',
                    });
                  }} disabled={!room.is_private} />
            </div>
        </article>
        <footer>
          <button className="mobile:w-full desktop:w-auto bg-[#785BD7] m-auto float-right
           text-white rounded-md font-semibold p-4 shadow-md transition-all hover:shadow-none 
             hover:opacity-75" type="submit">{roomTitles.buttonTitle}</button>
        </footer>
      </form>
    </section>
  );
}
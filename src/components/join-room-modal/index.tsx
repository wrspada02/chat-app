import { useEffect, useMemo } from "react";
import { JoinRoomModalProps } from "./@types";

export function JoinRoomModal({ isJoinRoom, handleClose }: JoinRoomModalProps) {
  const roomTitle = useMemo(() => {
    return ['join'].includes(isJoinRoom) ? 'Join into a Room' : 'Create a room';
  }, [isJoinRoom]);

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
    <section className="absolute top-0 left-0 bg-black opacity-80
      w-[100vw] h-[100vh] flex items-center justify-center">
      <article className="p-16 bg-[#D9D9D9] animate-pulse">
        <header className="flex items-center justify-between h-5">
          <h2 className="text-2xl font-semibold">{roomTitle}</h2>
          <button className="text-2xl" onClick={handleClose}>&#x2715;</button>
        </header>
        <article className="flex items-center justify-between gap-5 p-8">
            <div className="flex gap-3">
                <label>Is Private?</label>
                <input type="checkbox" />
            </div>
            <div className="flex flex-col">
              <label>Room ID</label>
              <input type="text" className="shadow-md outline-none p-1" 
                placeholder="Type the ID..." />
            </div>
            <div className="flex flex-col">
              <label>Room Password</label>
              <input type="text" className="shadow-md outline-none p-1" 
                placeholder="Type the password..."/>
            </div>
        </article>
        <footer>
          <button className="bg-[#785BD7] m-auto float-right
           text-white font-semibold p-4 shadow-md transition-all hover:shadow-none 
             hover:opacity-75">Create</button>
        </footer>
      </article>
    </section>
  );
}
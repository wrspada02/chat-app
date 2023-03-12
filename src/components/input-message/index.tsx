import { useRef } from "react";
import { InputMessageProps } from "./@types";

import SendMessageIcon from "../../assets/send_icon.svg";

export function InputMessage({ placeholder }: InputMessageProps) {
    const textRef = useRef(null);
    return(
        <div className="flex items-center justify-between p-2
            bg-[#7C7C7C] rounded-md outline-none text-white">
            <input 
                placeholder={placeholder} 
                ref={textRef}
                className="outline-none bg-transparent flex-1 pr-5"
                >
                    {textRef.current}
            </input>
            <img src={SendMessageIcon} className="max-w-[1.5rem] cursor-pointer hover:opacity-80 ease-in duration-300" alt="Icon to send the message" />
        </div>
    );
}
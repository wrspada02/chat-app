import { useState } from "react";

import { InputMessageProps } from "./@types";
import SendMessageIcon from "../../assets/send_icon.svg";

export function InputMessage({ placeholder, onSendMessage }: InputMessageProps) {
    const [inputValue, setInputValue] = useState<string>('');

    return(
        <div className="flex items-center justify-between p-2 cursor-pointer
            bg-[#7C7C7C] rounded-md outline-none text-white
            desktop:text-lg mobile:text-sm">
            <input
                placeholder={placeholder}
                className="outline-none bg-transparent flex-1 pr-5"
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <img 
                src={SendMessageIcon} 
                className="max-w-[1.5rem] cursor-pointer 
                    hover:opacity-80 ease-in duration-300" 
                alt="Icon to send the message"
                onClick={() => {
                    onSendMessage(inputValue);
                    setInputValue('');
                }}
            />
        </div>
    );
}
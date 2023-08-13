import { GroupMessageProps } from "./@types";

export function GroupMessage({ content, sender }: GroupMessageProps) {
    return (
        <article className="p-3 flex">
            <figure className="flex">
                <img 
                    src={sender?.avatar_url} 
                    alt={`Avatar user ${sender?.login} image`}
                    className="max-w-[70px] rounded-full"
                />
                <figcaption className="p-3 flex flex-col justify-center text-white">
                    <p className="font-medium">{sender?.login}</p>
                    <p>{content || ''}</p>
                </figcaption>
            </figure>
        </article>
    );
}
import { GroupMessageProps } from "./@types";

export function GroupMessage({ content, sender }: GroupMessageProps) {
    return (
        <article className="p-3">
            <figure className="flex items-center">
                <img src={sender?.avatar_url} alt={`Avatar user ${sender?.login} image`} />
                <figcaption className="p-3 flex flex-col justify-center text-white">
                    <p>{sender?.login}</p>
                    <p>{content || ''}</p>
                </figcaption>
            </figure>
        </article>
    );
}
export function GroupMessage() {
    return (
        <article className="p-3">
            <figure className="flex items-center">
                <div className="h-14 w-14 bg-black rounded-full min-w-[56px]"></div>
                <figcaption className="p-3 flex flex-col justify-center text-white">
                    <p>William</p>
                    <p>Hello, How's it going?</p>
                </figcaption>
            </figure>
        </article>
    );
}
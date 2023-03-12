import { GroupMessage } from "../../components/group-message";
import { HeaderIcon } from "../../components/header-icon";
import { InputMessage } from "../../components/input-message";
import { Sidebar } from "../../components/sidebar";

export function Room() {
    return(
        <main className="flex min-h-screen min-w-screen">
            <Sidebar style="min-h-full min-w-[20vw]" />
            <section className="min-w-min flex-1 flex flex-col">
                <header className="bg-[#FCFCFC] flex items-center justify-between p-5">
                    <h2 className="text-2xl"> Group of programmers</h2>
                    <HeaderIcon />
                </header>
                <section className="bg-[#555555] flex flex-col justify-end flex-1 px-5 py-5">
                    <section>
                        <GroupMessage />
                        <GroupMessage />
                        <GroupMessage />
                    </section>
                    <InputMessage placeholder="Type the message..." />
                </section>
            </section>
        </main>
    );
}
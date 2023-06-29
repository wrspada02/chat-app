import { Loading } from "../../components/loading";

export function CreatingUser() {
  // TO DO: Apply the logic to make a request to create an user here and then navigate to room (open a modal to welcome the user)
  return (
    <main className="flex items-center justify-center bg-[#92485b] h-[100vh] w-[100vw] transition animate-screen-to-right">
      <Loading />
    </main>
  );
}
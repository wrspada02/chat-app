import 'tailwindcss/tailwind.css';
import { LoginButton } from "./components/login-button";

export function App() {
    return (
        <LoginButton loginMode="google" />
    );
}
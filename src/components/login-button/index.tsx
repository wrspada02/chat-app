import GithubIcon from '../../assets/github_icon.svg';
import GoogleIcon from '../../assets/google_icon.svg'
import { LoginButtonProps } from './@types';

export function LoginButton({ loginMode }: LoginButtonProps) {
    return (
        <button className={`px-4 py-1 min-w-[650px] flex gap-x-40 
            items-center rounded-md hover:opacity-80 ease-in duration-300 
            ${ loginMode === 'github' ?
            'bg-[#504A4A]' :
            'bg-[#3456AC]' }`}>
            <img src={loginMode === 'github' ? 
                GithubIcon : GoogleIcon} alt={loginMode === 'github' ? 
                'Github Icon' : 'Google Icon'} 
                className='max-w-[50px] bg-[#CCCCCC] p-1 rounded-sm'
            />
            <span className='text-white text-xl'>Login with {
                loginMode === 'github' ? 'Github' : 'Google'
            }</span>
        </button>
    );
}
import GithubIcon from '../../assets/github_icon.svg';
import GoogleIcon from '../../assets/google_icon.svg'
import { LoginButtonProps } from './@types';

export function LoginButton({ loginMode }: LoginButtonProps) {
    return (
        <button className={`flex gap-x-40 py-1 px-4 items-center rounded-md 
            hover:opacity-80 ease-in duration-300
            desktop:min-w-[650px]
            mobile:w-min gap
            ${ loginMode === 'github' ?
            'bg-[#504A4A]' :
            'bg-[#3456AC]' }`}>
            <img src={loginMode === 'github' ? 
                GithubIcon : GoogleIcon} alt={loginMode === 'github' ? 
                'Github Icon' : 'Google Icon'} 
                className='max-w-[50px] desktop:bg-[#CCCCCC] p-1 rounded-sm'
            />
            <span className='text-white text-xl mobile:hidden desktop:block'>Login with {
                loginMode === 'github' ? 'Github' : 'Google'
            }</span>
        </button>
    );
}
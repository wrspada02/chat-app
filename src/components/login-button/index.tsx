import GithubIcon from '../../assets/github_icon.svg';
import GoogleIcon from '../../assets/google_icon.svg'
import { LoginButtonProps } from './@types';

export function LoginButton({ loginMode, url }: LoginButtonProps) {
    return (
        <a href={url} className={`flex py-1 px-4 items-center rounded-md 
            hover:opacity-80 ease-in duration-300
            ${ ['github'].includes(loginMode) ?
            'bg-[#504A4A]' :
            'bg-[#3456AC]' }`}>
            <img src={['github'].includes(loginMode) ? 
                GithubIcon : GoogleIcon} alt={['github'].includes(loginMode) ? 
                'Github Icon' : 'Google Icon'} 
                className='max-w-[50px] rounded-sm'
            />
            <span className='tablet:text-white tablet:text-lg tablet:block mobile:hidden'>Login with {
                ['github'].includes(loginMode) ? 'Github' : 'Google'
            }</span>
        </a>
    );
}
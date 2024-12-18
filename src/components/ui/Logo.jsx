import { cn } from '../../lib/utils';
function Logo() {
    return (
        <div className={cn("text-center")}>
            <img  className="h-[5rem] w-auto animate-spin-slow" src='/logowhite.png'  alt="Logo"></img>
        </div>
    )
}

export default Logo

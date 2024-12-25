import { cn } from '../../lib/utils';
function Logo() {
    return (
        <div className={cn("text-center mt-10")}>
            <img  className={cn("h-[5rem] w-auto animate-bounce")} src='/logowhite.png'  alt="Logo"></img>
        </div>
    )
}

export default Logo

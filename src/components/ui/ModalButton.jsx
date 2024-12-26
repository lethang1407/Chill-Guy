import { Button } from "./Button";
import { cn } from "../../lib/utils";

function ModalButton({ children, icon, onClick, tooltip }) {
    return (
        <div className={cn("relative group inline-block")}>
            
            <Button onClick={onClick} className="flex items-center justify-center bg-transparent border-none shadow-none">
                <span>{icon}</span>
                {children}
            </Button>

            {tooltip && (
                <span
                    className={cn(
                         "drop-shadow-2xl absolute w-[7rem] text-center left-1/2 filter-green-glow -translate-x-1/2 top-[110%] text-xl text-white py-1 rounded opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    )}
                >
                    {tooltip}
                </span>
            )}
        </div>
    );
}

export default ModalButton;

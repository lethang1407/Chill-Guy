import { Button } from "./Button"
import { cn } from "../../lib/utils"
function ModalButton({children,icon, onClick}) {
    return (
        <Button size="sm" className={cn("rounded-full px-3 opacity-70 ")}onClick={onClick}  >
            {icon}
            {children}
        </Button>
    )
}

export default ModalButton

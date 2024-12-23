import { Button } from "./Button"
import { cn } from "../../lib/utils"
function ModalButton({children,icon, onClick}) {
    return (
        <Button onClick={onClick}  >
            <span >{icon}</span>
            {children}
        </Button>
    )
}

export default ModalButton

import {cn} from "../../lib/utils"
import MusicContent from "../PlayMusic/MusicContent"
function Music() {
    return (
        <div className={cn("absolute bottom-0 left-0 w-full z-10")}>
            <MusicContent />
        </div>
    )
}

export default Music

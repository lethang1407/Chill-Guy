import { cn } from "../../lib/utils"
import MusicPlay from "./MusicPlay"
import { useSelector } from "react-redux"

function MusicContent() {
    const selectID = useSelector((state) => state.music);
    return (
        <div className={cn("m-9")}>
           <MusicPlay videoId={selectID.url} />
           <p className={cn("text-xl  filter-green-glow text-slate-200")}>{selectID.des}</p>
        </div>
    )
}   

export default MusicContent

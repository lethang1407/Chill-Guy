import { cn } from "../../lib/utils"
import Clock from "../ui/Clock";
import MusicPlay from "./MusicPlay"
import { useSelector } from "react-redux"

function MusicContent() {
    const selectID = useSelector((state) => state.music);
    return (
        <div className={cn("m-9 flex justify-between")}>
            <div>
                <MusicPlay videoId={selectID.url} />
                <p className={cn("text-xl mt-2 filter-green-glow text-slate-200")}>{selectID.des}</p>
            </div>
            <Clock />
        </div>
    )
}

export default MusicContent

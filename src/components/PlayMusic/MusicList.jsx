import MusicItem from "./MusicItem"
import { cn } from '../../lib/utils'
export const MusicListData = [
    {
        name: "About You",
        url: "iqGAW57EudQ",
        des: "About You - The 1975"
    },
    {
        name: "Lofi Girl",
        url: "jfKfPfyJRdk",
        des: "lofi hip hop radio 📚 beats to relax/study to"
    },
    {
        name: "STEEZYASFUCK",
        url: "N_7cSl2oq3o",
        des: "Coffee Shop Radio ❄️☕ - 24/7 Chill Lo-Fi & Jazzy Beats"
    },
    {
        name: "Relax Jazz Cafe",
        url: "-5R-aLmZ9Ps",
        des: "Cozy Winter Coffee Shop Ambience with Warm Jazz Music & Crackling Fireplace to Relaxing, Study, Work"
    },
    {
        name: "Chill with Taiki",
        url: "qH3fETPsqXU",
        des: "【24/7 CHILL LOFI HIP HOP RADIO】beats to sleep/relax/study to"
    }, 
    {
        name: "Chillhop Music",
        url: "5yx6BWlEVcY",
        des: "Chillhop Radio - jazzy & lofi hip hop beats 🐾"
    }

]
function MusicList() {
    return (
        <ul className={cn(" gap-2  overflow-y-auto max-h-[50vh] scroll-smooth items-center justify-center mt-5 ")} >
            {MusicListData.map((music) => (
                <MusicItem key={music.name} name={music.name}  des={music.des} url={music.url} />
            ))}
        </ul>
    )
}

export default MusicList

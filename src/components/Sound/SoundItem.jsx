import { cn } from "../../lib/utils"
import Icon from "../ui/Icon"
import VolumeSlider from "./VolumeSlider"

function SoundItem({ sound, handleVolumeChange, handleToggleMute}) {
    return (

        <div className={cn("flex-1 flex items-center justify-center")}>
            <p className={cn("mr-2")}>{sound.name}</p>
            <button className={cn("ml-auto mr-2")} onClick={() => handleToggleMute(sound.id)}>{sound.volume > 0 ? <Icon name={"Volume"} /> : <Icon className={cn("filter-red-glow")} name={"Mute"} />}</button>
            <div className="flex items-center gap-1">
                {/* Điều khiển âm lượng của mỗi âm thanh */}
                <VolumeSlider
                    soundId={sound.id}
                    volume={sound.volume}
                    onVolumeChange={handleVolumeChange}
                   
                />
            </div>
        </div>

    )
}

export default SoundItem

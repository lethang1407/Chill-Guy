
import { cn } from "../../lib/utils"
import {  useRef } from "react"
import { setToggleMute, setVolume } from "../../redux/actions";
import Icon from "./Icon"
import { useDispatch, useSelector } from "react-redux";
export default function VolumeSetting({ player, maxSetting = 10 }) {
    const dispatch = useDispatch();
    const { volume, previousVolume } = useSelector((state) => state.audio);
    const currentVolumeIndex = Math.round(volume * maxSetting);

    const containerRef = useRef(null);

    const handleVolumeChange = (newVolume) => {
        dispatch(setVolume(newVolume));
        if (player) player.setVolume(newVolume * 100); 
    };
    const handletoggleMute = () => {
        dispatch(setToggleMute()); 
    
        if (player) {
            const newVolume = volume === 0 ? previousVolume : 0; 
            player.setVolume(newVolume * 100); 
        }
    };
    const handleDragVolume = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickPosition = e.clientX - rect.left;
        const newVolume = Math.min(Math.max(clickPosition / rect.width, 0), 1);
        handleVolumeChange(newVolume);
    };

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const newVolume = Math.min(Math.max(mouseX / rect.width, 0), 1);
        handleVolumeChange(newVolume);
    };

    const handleMouseDown = (e) => {
        handleDragVolume(e);

        const handleMouseMoveWithRef = (event) => handleMouseMove(event);

        window.addEventListener("mousemove", handleMouseMoveWithRef);
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", handleMouseMoveWithRef);
        }, { once: true });
    };
    return (
        <div className={cn("flex items-center gap-2")}>
            <div onClick={handletoggleMute} className="cursor-pointer">
                {volume > 0 ? <Icon name={"Volume"} /> : <Icon name={"Mute"} />}
            </div>
            <div
                ref={containerRef}
                className={cn("flex gap-1 cursor-pointer")}
                onMouseDown={handleMouseDown}
            >
                {Array.from({ length: maxSetting }, (_, index) => (
                    <Volume
                        key={index}
                        isActive={index < currentVolumeIndex}
                        isMuted={volume === 0}
                    />
                ))}
            </div>
        </div>
    );
}

function Volume({ isActive, isMuted }) {
    return (
        <span
            role="button"
            className={cn(
                "h-4 w-2",
                isMuted ? "filter-red-glow bg-slate-400" : isActive ? "bg-white filter-green-glow" : "bg-slate-400"
            )}
        ></span>
    );
}
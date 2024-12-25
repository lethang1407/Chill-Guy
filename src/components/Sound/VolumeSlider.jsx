import Volume from "./Volume";

function VolumeSlider({ soundId, volume, onVolumeChange, }) {
    const maxSetting = 10;
    const currentVolumeIndex = Math.round(volume * maxSetting);
  
    const handleMouseDown = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      let newVolume = Math.min(Math.max(clickPosition / rect.width, 0), 1);
      onVolumeChange(soundId, newVolume);
     
      const handleMouseMove = (e) => {
        const newClickPosition = e.clientX - rect.left;
        newVolume = Math.min(Math.max(newClickPosition / rect.width, 0), 1);
        onVolumeChange(soundId, newVolume);
      };
  
      const handleMouseUp = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
  

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };
  
    return (
      <div
        className="flex gap-1 cursor-pointer"
        onMouseDown={handleMouseDown}
      >
        {Array.from({ length: maxSetting }, (_, index) => (
          <Volume key={index} isActive={index < currentVolumeIndex} isMuted={volume === 0} />
        ))}
      </div>
    );
  }
  export default VolumeSlider;
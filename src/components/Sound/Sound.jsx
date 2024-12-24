import { useDispatch, useSelector } from 'react-redux';
import { setVolumeSound, toggleMuteSound } from '../../redux/actions';
import SoundItem from './SoundItem';
import { cn } from '../../lib/utils';

export default function VolumeSettings() {
  const dispatch = useDispatch();
  const sounds = useSelector((state) => state.sound); 

  const handleToggleMute = (soundId) => {
    dispatch(toggleMuteSound(soundId));
  }
  const handleVolumeChange = (soundId, newVolume) => {
    dispatch(setVolumeSound(soundId, newVolume)); 
  };

  return (
    <div className={cn("space-y-4 px-5 overflow-y-auto h-[40vh]")}>
      <h2 className={cn("text-xl my-3")}>🌧 Sound Settings 🌳</h2>
      {sounds.map((sound) => (
        <SoundItem
          key={sound.id}
          sound={sound}
          handleVolumeChange={handleVolumeChange}
          handleToggleMute={handleToggleMute}
        />
      ))}
    </div>
  );
}





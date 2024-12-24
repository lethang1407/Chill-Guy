import { SET_SOUND_VOLUME,TOGGLE_MUTE_SOUND } from "../constantsType/actionType";

const INITIAL_STATE = [
  { id: 1, name: 'Rain', file: '/Rain/rain.mp3', playing: false, audio: null, volume: 0 },
  { id: 2, name: 'Wind', file: '/Rain/wind.mp3', playing: false, audio: null, volume: 0 },
  { id: 3, name: 'Bird', file: '/Rain/bird.mp3', playing: false, audio: null, volume: 0 },
  { id: 4, name: 'Fire', file: '/Rain/fire.mp3', playing: false, audio: null, volume: 0 },
  { id: 5, name: 'Grass', file: '/Rain/grass.mp3', playing: false, audio: null, volume: 0 },
];

const soundReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_SOUND_VOLUME:
      return state.map((sound) => {
        if (sound.id === action.payload.id) {
          const audio = sound.audio || new Audio(sound.file);
          
          
          audio.volume = action.payload.volume;
          audio.loop = true;
          
          if (action.payload.volume > 0 && !sound.playing) {
            audio.play();  
          } else if (action.payload.volume === 0) {
            audio.pause();
            audio.currentTime = 0; 
          }

          return { ...sound, audio, volume: action.payload.volume, playing: action.payload.volume > 0 };
        }
        return sound;
      });

      case TOGGLE_MUTE_SOUND:
        return state.map((sound) => {
          if (sound.id === action.payload.id) {
            const audio = sound.audio || new Audio(sound.file);
            audio.muted = !audio.muted;

            const newVolume = audio.muted ? 0 : 0.5;
  
            if (audio.muted) {
              audio.pause(); 
              audio.currentTime = 0; 
            } else {
              audio.volume = newVolume;
              if (newVolume > 0) {
                audio.play(); 
              }
            }
  
            return { ...sound, audio, volume: newVolume, muted: audio.muted };
          }
          return sound;
        });
  
    default:
      return state;
  }
};

export default soundReducer;

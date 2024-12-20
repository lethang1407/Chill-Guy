import { SET_PAUSE, SET_PLAYING, SET_VOLUME, SET_TOGGLE_MUTE } from "../constantsType/actionType";

const INITIAL_STATE = {
    playing: false,
    pause: true,
    volume: 1,
    previousVolume: 1,
};

export const audioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PLAYING:
            return { ...state, playing: action.payload };
        case SET_PAUSE:
            return { ...state, pause: action.payload };
        case SET_VOLUME:
            return {
                ...state,
                previousVolume: action.payload === 0 ? state.volume : state.previousVolume,
                volume: action.payload,
            };
        case SET_TOGGLE_MUTE:
           
            return {
                ...state,
                volume: state.volume === 0 ? state.previousVolume : 0,
            };
        default:
            return state;
    }
};
export default audioReducer;
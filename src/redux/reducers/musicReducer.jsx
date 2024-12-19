import { SET_MUSIC } from "../constantsType/actionType"

const INITIAL_STATE = {
    isPlaying: false,
    audio: null,
    music: null,
}

export const musicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MUSIC:
            return {...state, music: action.payload}
        default:
            return state;
    }
}
export default musicReducer
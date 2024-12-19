import { SET_PAUSE } from "../constantsType/actionType";
import { SET_PLAYING } from "../constantsType/actionType";
import { SET_VOLUME } from "../constantsType/actionType";

const INITIAL_STATE = {
    playing: true,
    pause: false,
    volume: 0.5,
};

export const audioReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_PLAYING:
            return { ...state, playing: action.payload };
        case SET_PAUSE:
            return { ...state, pause: action.payload };
        case SET_VOLUME:
            return { ...state, volume: action.payload };
        default:
            return state;
    }
};
export default audioReducer;
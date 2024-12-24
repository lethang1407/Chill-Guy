import { SET_VIDEO_URL, TOGGLE_PLAYING_VIDEO } from "../constantsType/actionType";



const INITIAL_STATE = {
    url: '',
    playing: false,
};
const videoUrlReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_VIDEO_URL:
            return { ...state, url: action.payload }
        case TOGGLE_PLAYING_VIDEO:
            return { ...state, playing: !state.playing };
        default:
            return state;
    }
}
export default videoUrlReducer

import ReactPlayer from "react-player";
import { SET_VIDEO_URL, TOGGLE_PLAYING_VIDEO, ADD_VIDEO_URL, DELETE_VIDEO_URL } from "../constantsType/actionType";
import toast from "react-hot-toast";
const INITIAL_STATE = {
    url: '',
    playing: false,
    listUrls: []
};
const videoUrlReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_VIDEO_URL:
            return { ...state, url: action.payload }
        case TOGGLE_PLAYING_VIDEO:
            return { ...state, playing: !state.playing };
        case ADD_VIDEO_URL: {
            const { url } = action.payload;
            const isValidUrl = ReactPlayer.canPlay(url.url);
            const isDuplicate = state.listUrls.some((item) => item.url.url === url.url);
            if(!isValidUrl){
                toast.error("URL is not valid.");
            } else {
                toast.success("Added successfully!");
            }
            if (isValidUrl && !isDuplicate) {
                
                return {
                    ...state,
                    listUrls: [...state.listUrls, { url }],
                };
            }

            return state;
        }

        case DELETE_VIDEO_URL: {
            const urlToDelete = action.payload;
            return {
                ...state,
                listUrls: state.listUrls.filter((item) => item.url !== urlToDelete),
            };
        }

        default:
            return state;
    }
}
export default videoUrlReducer

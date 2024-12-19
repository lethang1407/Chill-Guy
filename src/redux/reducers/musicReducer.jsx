import { SET_MUSIC,SET_NEXT,SET_PREVIOUS } from "../constantsType/actionType"

import { MusicListData } from "../../components/PlayMusic/MusicList"
const INITIAL_STATE = {
    name: MusicListData[0]?.name || "",
    des: MusicListData[0]?.des || "",
    url: MusicListData[0]?.url || "",
    currentIndex: 0 
}

export const musicReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_MUSIC:
            return { ...state, ...action.payload }
        case SET_NEXT:
            const nextIndex = (state.currentIndex + 1) % MusicListData.length;
            return { 
                ...state, 
                name: MusicListData[nextIndex]?.name || "", 
                des: MusicListData[nextIndex]?.des || "", 
                url: MusicListData[nextIndex]?.url || "",
                currentIndex: nextIndex  
            };
        case SET_PREVIOUS:
            const prevIndex = (state.currentIndex - 1 + MusicListData.length) % MusicListData.length;
            return { 
                ...state, 
                name: MusicListData[prevIndex]?.name || "", 
                des: MusicListData[prevIndex]?.des || "", 
                url: MusicListData[prevIndex]?.url || "",
                currentIndex: prevIndex  
            };
        default:
            return state;
    }
}
export default musicReducer
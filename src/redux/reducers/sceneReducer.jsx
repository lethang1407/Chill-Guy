import { SET_SCENE } from "../constantsType/actionType"
import {SceneListData} from "../../components/Scene/SceneList"
const savedScene =  localStorage.getItem('selectedScene');
const INITIAL_STATE = {
    selectedScene:savedScene ?JSON.parse(savedScene) : SceneListData[0] || null,
};

const sceneReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SCENE:
            const updatedState = {
                ...state,
                selectedScene: action.payload,
            };
            localStorage.setItem("selectedScene", JSON.stringify(action.payload));
            return updatedState;
        default:
            return state;
    }
}
export default sceneReducer

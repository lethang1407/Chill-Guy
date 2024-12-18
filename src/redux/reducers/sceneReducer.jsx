import { SET_SCENE } from "../constantsType/actionType"
import {SceneListData} from "../../components/Scene/SceneList"
const INITIAL_STATE = {
    selectedScene: SceneListData[0] || null,
};

const sceneReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_SCENE:
            return {
                ...state,
                selectedScene: action.payload,
              };
        default:
            return state;
    }
}
export default sceneReducer

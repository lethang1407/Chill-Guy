import { TOGGLE_FULLSCREEN } from "../constantsType/actionType";

const initialState = {
  fullscreen: false, 
};

const fullscreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FULLSCREEN:
      return {
        ...state,
        fullscreen: !state.fullscreen, 
      };
    default:
      return state;
  }
};

export default fullscreenReducer;
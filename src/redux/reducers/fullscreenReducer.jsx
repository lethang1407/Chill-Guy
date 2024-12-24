import { TOGGLE_FULLSCREEN } from "../constantsType/actionType";

const initialState = {
  fullscreen: false, // Mặc định không ở chế độ fullscreen
};

const fullscreenReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FULLSCREEN:
      return {
        ...state,
        fullscreen: !state.fullscreen, // Đảo ngược trạng thái fullscreen
      };
    default:
      return state;
  }
};

export default fullscreenReducer;
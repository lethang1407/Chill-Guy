import { START_POMODORO, STOP_POMODORO, RESET_POMODORO, SET_POMODORO_TIME, TOGGLE_POMODORO_MODE } from "../constantsType/actionType";

const initialState = {
    time: 25 * 60, 
    isCounting: false,
    isPomodoroMode: false,
};

const pomodoroReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_POMODORO_MODE:
            return {
                ...state,
                isPomodoroMode: action.payload,
                time: action.payload ? 25 * 60 : state.time,  
            };
        case START_POMODORO:
            return {
                ...state,
                isCounting: true,
            };
        case STOP_POMODORO:
            return {
                ...state,
                isCounting: false,
            };
        case RESET_POMODORO:
            return {
                ...state,
                isCounting: false,
                time: 25 * 60, 
            };
        case SET_POMODORO_TIME:
            return {
                ...state,
                time: action.payload,
            };
        default:
            return state;
    }
};

export default pomodoroReducer;

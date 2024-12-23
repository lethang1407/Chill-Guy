import { SET_SELECTED_DATE, SET_EVENT, DELETE_EVENT, EDIT_EVENT } from "../constantsType/actionType";

const INITIAL_STATE = {
    events: {},
    selectedDate: null,
};

export const calendarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_EVENT:
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.payload.date]: action.payload.event,
                },
            };
        case SET_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload || dayjs().format("YYYY-MM-DD"), 
            };
        case DELETE_EVENT:
            const updatedEvents = { ...state.events };
            delete updatedEvents[action.payload];
            return {
                ...state,
                events: updatedEvents,
            };
        case EDIT_EVENT:
            return {
                ...state,
                events: {
                    ...state.events,
                    [action.payload.date]: action.payload.event,
                },
            };
        default:
            return state;
    }
}

export default calendarReducer;

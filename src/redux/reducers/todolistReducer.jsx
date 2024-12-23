import { ADD_TODO_LIST, DELETE_TODO_LIST, EDIT_TODO_LIST, TOGGLE_TODO_LIST } from "../constantsType/actionType";
const INITIAL_STATE = {
    todoList: []
};

const todolistReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO_LIST:
            return {
                ...state,
                todoList: [...state.todoList, { ...action.payload, completed: false }],
            };
        case DELETE_TODO_LIST:
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.payload),
            };
        case EDIT_TODO_LIST:
            return {
                ...state,
                todoList: state.todoList.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
            };
        case TOGGLE_TODO_LIST:
            return {
                ...state,
                todoList: state.todoList.map((item) =>
                    item.id === action.payload
                        ? { ...item, completed: !item.completed }
                        : item
                ),
            };
        default:
            return state;
    }
};

export default todolistReducer
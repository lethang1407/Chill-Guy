// src/reducers/index.js
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import musicReducer from './musicReducer';
import audioReducer  from './audioReducer';
import calendarReducer from './CalendarReducer';
import  todolistReducer  from './todolistReducer';
 const rootReducer = combineReducers({
    scene: sceneReducer,
    music: musicReducer,
    audio: audioReducer,
    event: calendarReducer,
    todolist: todolistReducer
});

export {rootReducer};

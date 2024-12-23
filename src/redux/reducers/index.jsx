// src/reducers/index.js
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import musicReducer from './musicReducer';
import audioReducer  from './audioReducer';
import calendarReducer from './CalendarReducer';
 const rootReducer = combineReducers({
    scene: sceneReducer,
    music: musicReducer,
    audio: audioReducer,
    event: calendarReducer
});

export {rootReducer};

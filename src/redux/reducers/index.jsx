// src/reducers/index.js
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import musicReducer from './musicReducer';
import audioReducer  from './audioReducer';
export const rootReducer = combineReducers({
    scene: sceneReducer,
    music: musicReducer,
    audio: audioReducer
});

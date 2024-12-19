// src/reducers/index.js
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';
import musicReducer from './musicReducer';
export const rootReducer = combineReducers({
    scene: sceneReducer,
    music: musicReducer
});

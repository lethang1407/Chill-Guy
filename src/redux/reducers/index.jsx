// src/reducers/index.js
import { combineReducers } from 'redux';
import sceneReducer from './sceneReducer';

export const rootReducer = combineReducers({
    scene: sceneReducer
});

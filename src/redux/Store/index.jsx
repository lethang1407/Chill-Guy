
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';  
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  


const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['event', 'music','todolist'],  
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export { store, persistor };

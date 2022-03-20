// ========== Root Reducer
// import all modules
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// import all reducer
import dataReducer from './data';
import booleanReducer from './boolean';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: ['boolean'],
};

const dataPersistConfig = {
  key: 'data',
  storage,
};

const rootReducer = combineReducers({
  data: persistReducer(dataPersistConfig, dataReducer),
  boolean: booleanReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);

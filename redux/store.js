// ========== Store
// import all modules
import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunk,
      logger,
    ),
  );

  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};

export default persistedStore;

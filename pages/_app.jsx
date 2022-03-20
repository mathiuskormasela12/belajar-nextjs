import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import PropTypes from 'prop-types';
import persistedStore from '../redux/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const { store, persistor } = persistedStore();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.shape().isRequired,
};

export default MyApp;

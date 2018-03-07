import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'react-router-redux';

import { configureStore, history } from './store/configureStore';

import App from './components/app/app.jsx';
import Loading from './components/loading/loading.jsx';

import './index.css';

const { store, persistor } = configureStore();

render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<Loading />}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import App from './Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

const store = createStore(reducer);

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);

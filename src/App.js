import React from 'react';
import App from './Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducers/reducer';

// creates redux store, pass in all reducers here
const store = createStore(reducer);

export default () => (
  // redux store is passed as a prop to the redux provider
  <Provider store={store}>
    <App />
  </Provider>
);

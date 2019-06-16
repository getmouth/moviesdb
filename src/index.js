import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './components/store';
import App from './components/App';


const mount = document.getElementById('app');

render(
  <Provider store={store}>
    <App />
  </Provider>,mount
);

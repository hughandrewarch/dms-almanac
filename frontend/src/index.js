import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './js/views/App';
import store from "./js/store"
import history from './js/history'


(async (window) => {
  const rootEl = document.getElementById('root');
  const render = (Component, el) => {
    ReactDOM.render(
      <Provider store={store}>
        <Component history={history} dispatch={store.dispatch}/>
      </Provider>,
      el
    );
  };

  render(App, rootEl);
})(window);

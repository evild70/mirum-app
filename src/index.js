import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import './styles/main.css';
import { configureStore } from './store';
import Root from './root';
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const rootElement = document.getElementById('root');


function render(Root) {
  ReactDOM.render(
    <AppContainer>
      <Root history={history} store={store} />
    </AppContainer>,
    rootElement
  );
}

if (module.hot) {
  module.hot.accept('./root', () => {
    render(require('./root').default);
  });
}

render(Root)

import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk'

export function configureStore() {
  let middleware = applyMiddleware(ReduxThunk);

  if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(reducers, middleware);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return store;
}

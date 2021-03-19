import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import appReducer from '../containers/App/reducer';

import middleware from './middleware';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

const enhancers = [applyMiddleware(...middleware)];

export default createStore(
  combineReducers({ app: appReducer }),
  {},
  composeEnhancers(...enhancers)
);

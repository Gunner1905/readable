import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import rootSaga from '../redux-saga'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware()

const middlewareArray = []
if (process.env.NODE_ENV === `dev`) {
  const { logger } = require(`redux-logger`);

  middlewareArray.push(logger);
}
middlewareArray.push(sagaMiddleware)

const store = createStore(
  reducers,
  composeEnhancers(
  applyMiddleware(...middlewareArray)
  )
);
sagaMiddleware.run(rootSaga)

export default store
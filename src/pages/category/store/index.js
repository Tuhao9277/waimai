import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import mainReducer from './reducers';

const store = createStore(mainReducer, applyMiddleware(logger, thunk));

export default store;
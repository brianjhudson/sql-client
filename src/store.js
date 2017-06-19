import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import sql from './ducks/sql.js'
import user from './ducks/user.js'
import message from './ducks/message.js'

export default createStore(combineReducers({sql, user, message}), {}, applyMiddleware(thunkMiddleware))
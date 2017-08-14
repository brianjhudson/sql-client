import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';

import sql from './ducks/sql.js'
import user from './ducks/user.js'
import message from './ducks/message.js'
import modal from './ducks/modal.js'

export default createStore(combineReducers({sql, user, message, modal}), {}, applyMiddleware(thunkMiddleware))
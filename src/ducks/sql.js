import axios from 'axios'

// Initial State
const initialState = {
   fetchingData: false,
   error: null,
   tables: [],
   history: [],
   command: "",
   rowCount: null,
   fields: [],
   results: [],
   currentQuery: ""
}

// Actions
const FETCHING_DATA = 'sql/FETCHING_DATA'
const FETCH_ERROR = 'sql/FETCH_ERROR'
const FETCHED_DATA = 'sql/FETCHED_DATA'
const FETCHED_QUERY = 'sql/FETCHED_QUERY'
const ADD_DATA = 'sql/ADD_DATA'
const UPDATE_QUERY = 'sql/UPDATE_QUERY'

// Async Action Creators

export function getTables() {
   return dispatch => {
      dispatch(fetchingData())
      return axios.get('/api/sql/table')
      .then(result => {
         dispatch(fetchedData('tables', result.data));
      })
      .catch(err => {
         console.log(err)
         dispatch(fetchError(err))
      })
   }
}

export function postQuery(query) {
   return dispatch => {
      dispatch(fetchingData())
      dispatch(updateQuery(query))
      return axios.post('/api/sql/query', {query: query})
      .then(result => {
         if (result.data.error) {
            dispatch(fetchError(result.data))
         } else {
            dispatch(fetchedQuery(query, result.data))
            dispatch(getTables())
         }
      })
      .catch(err => {
         dispatch(fetchError(err))
      })
   }
}

// Simple Action Creators
function fetchingData() {
   return {
      type: FETCHING_DATA
   }
}

function fetchError(err) {
   return {
      type: FETCH_ERROR,
      error: err
   }
}

function fetchedData(key, data) {
   return {
      type: FETCHED_DATA,
      key,
      data
   }
}

function fetchedQuery(query, data) {
   return {
      type: FETCHED_QUERY,
      query,
      data
   }
}

export function addData(key, data) {
   return {
      type: ADD_DATA,
      key,
      data
   }
}

export function updateQuery(query) {
   return {
      type: UPDATE_QUERY,
      query
   }
}

export default function sqlReducer(state = initialState, action) {
   console.log(action.type)
   switch(action.type) {
      case FETCHING_DATA: 
         return Object.assign({}, state, {fetchingData: true})
      case FETCH_ERROR:
         return Object.assign({}, state, {
            fetchingData: false, 
            error: action.error,
            command: null,
            rowCount: null,
            results: [],
            fields: []
         })
      case FETCHED_DATA: 
         return Object.assign({}, state, {fetchingData: false, [action.key]: action.data})
      case FETCHED_QUERY:
         const {command, rowCount, rows, fields} = action.data
         const query = action.query.toUpperCase()
         const history = state.history.slice()
         if (state.history.indexOf(query) === -1) {
            history.push(query)
         }
         return Object.assign({}, state, {
            history,
            command,
            rowCount,
            results: rows,
            fields,
            error: null
         })
      case ADD_DATA:
         const newArr = state[action.key].slice()
         newArr.push(action.data)
         return Object.assign({}, state, {[action.key]: newArr})
      case UPDATE_QUERY:
         return Object.assign({}, state, {currentQuery: action.query.toUpperCase()})
      default:
         return state
   }   
}
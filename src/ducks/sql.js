import axios from 'axios'

// Initial State
const initialState = {
   fetchingData: false,
   fetchError: null,
   tables: [],
   results: [],
   fields: [],
   history: [],
}

// Actions
const FETCHING_DATA = 'sql/FETCHING_DATA'
const FETCH_ERROR = 'sql/FETCH_ERROR'
const FETCHED_DATA = 'sql/FETCHED_DATA'
const ADD_DATA = 'sql/ADD_DATA'

// Async Action Creators

export function getTables() {
   return dispatch => {
      dispatch(fetchingData())
      return axios.get('http://localhost:4000/api/sql/table')
      .then(result => {
         dispatch(fetchedData('tables', result.data));
      })
      .catch(err => {
         dispatch(fetchError(err))
      })
   }
}

export function postQuery(query) {
   return dispatch => {
      dispatch(addData('history', query))
      dispatch(fetchingData())
      return axios.post('http://localhost:4000/api/sql/query', {query: query})
      .then(result => {
         dispatch(fetchedData('fields', result.data.fields))
         dispatch(fetchedData('results', result.data.rows))
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

export function addData(key, data) {
   return {
      type: ADD_DATA,
      key,
      data
   }
}

export default function sqlReducer(state = initialState, action) {
   console.log(action.type)
   switch(action.type) {
      case FETCHING_DATA: 
         return Object.assign({}, state, {fetchingData: true})
      case FETCH_ERROR: 
         return Object.assign({}, state, {fetchingData: false, fetchError: action.error})
      case FETCHED_DATA: 
         return Object.assign({}, state, {fetchingData: false, [action.key]: action.data})
      case ADD_DATA:
         const newArr = state[action.key].slice()
         newArr.push(action.data)
         return Object.assign({}, state, {[action.key]: newArr})
      default:
         return state
   }   
}
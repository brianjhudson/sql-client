import axios from 'axios'

// Initial State
const initialState = {
   user: {id: 22, github_username: "guestuser", first_name: "Guest", last_name: "User"}
}

// Actions
const FETCHING_DATA = 'user/FETCHING_DATA'
const FETCH_ERROR = 'user/FETCH_ERROR'
const FETCHED_DATA = 'user/FETCHED_DATA'

// Async Action Creators

export function getUser() {
   return dispatch => {
      dispatch(fetchingData());
      return axios.get('/auth/login')
      .then(result => {
         dispatch(fetchedData('user', result.data))
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

export default function sqlReducer(state = initialState, action) {
   console.log(action.type)
   switch(action.type) {
      case FETCHING_DATA: 
         return Object.assign({}, state, {fetchingData: true})
      case FETCH_ERROR: 
         return Object.assign({}, state, {fetchingData: false, fetchError: action.error})
      case FETCHED_DATA: 
         return Object.assign({}, state, {fetchingData: false, [action.key]: action.data})
      default:
         return state
   }   
}


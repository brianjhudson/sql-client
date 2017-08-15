import axios from 'axios'

// Initial State
const initialState = {
   user: {
      github_username: 'guestuser',
      github_avatar: "https://www.clker.com/cliparts/5/9/4/c/12198090531909861341man%20silhouette.svg"
   }
}

// Actions
const FETCHING_DATA = 'user/FETCHING_DATA'
const FETCH_ERROR = 'user/FETCH_ERROR'
const FETCHED_DATA = 'user/FETCHED_DATA'

// Async Action Creators

export function getUser() {
   return dispatch => {
      dispatch(fetchingData());
      return axios.get('/auth/login/')
      .then(result => {
         if (result.data && result.data.github_username) {
            dispatch(fetchedData('user', result.data))
         }
      })
      .catch(err => {
         dispatch(fetchError(err))
      })
   }
}

export function logoutUser() {
   return dispatch => {
      dispatch(fetchingData())
      return axios.get('/auth/logout')
      .then(result => {
         dispatch(fetchedData('user', initialState.user))
      })
      .catch(err => {
         console.log(err)
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


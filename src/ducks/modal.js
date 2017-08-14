const SHOW_LOGIN_MODAL = 'modal/SHOW_LOGIN_MODAL'
const HIDE_LOGIN_MODAL = 'modal/HIDE_LOGIN_MODAL'

export function showLoginModal() {
   return {
      type: SHOW_LOGIN_MODAL
   }
}

export function hideLoginModal() {
   return {
      type: HIDE_LOGIN_MODAL
   }
}

const initialState = {
   viewLoginModal: false
}

export default function modalReducer(state = initialState, action) {
   switch(action.type) {
      case SHOW_LOGIN_MODAL:
         return Object.assign({}, state, {viewLoginModal: true})
      case HIDE_LOGIN_MODAL:
         return Object.assign({}, state, {viewLoginModal: false})
      default:
         return state
   }
}
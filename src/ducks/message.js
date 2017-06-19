// Initial State
const initialState = {
   messages: []
}

// Actions
const ADD_MESSAGES = 'messages/ADD_MESSAGES'

// Simple Action Creators
export function addMessages(messages) {
   return {
      type: ADD_MESSAGES,
      messages
   }
}

// Reducer
export default function messageReducer(state = initialState, action) {
   switch (action.type) {
      case ADD_MESSAGES:
         const newMessages = state.messages.concat(action.messages)
         return Object.assign({}, {messages: newMessages})
      default:
         return state
   }
}
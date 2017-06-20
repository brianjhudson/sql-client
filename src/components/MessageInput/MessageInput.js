import React, {Component} from 'react'

import './MessageInput.css'

export default class MessageInput extends Component {
   constructor() {
      super()
      this.state = {
         message: ""
      }
      this.changeMessage = this.changeMessage.bind(this)
      this.submitForm = this.submitForm.bind(this)
   }

   changeMessage(e) {
      this.setState({message: e.target.value})
   }

   submitForm(e) {
      e.preventDefault()
      this.props.emitMessage(this.state.message)
      this.setState({message: ""})
   }

   render() {
      return (
         <form onSubmit={this.submitForm} className="message-form">
            <input type="text" placeholder="What's on your mind?" value={this.state.message} onChange={this.changeMessage} />
         </form>
      )
   }
}
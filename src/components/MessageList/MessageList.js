import React, {Component} from 'react'
import Message from '../Message/Message'

import './MessageList.css'

export default class MessageList extends Component {
   constructor() {
      super()
   }
   componentDidUpdate() {
      this.refs.list.scrollTop = this.refs.list.scrollHeight
   }
   render() {
      // this.refs.list.scrollTop(this.refs.list.scrollHeight)
      const messages = this.props.messages.map(message => ((<Message key={message.id} message={message}/>)))
      return (
         <div className="message-list" ref="list">
            {messages}
         </div>
      )
   }
}
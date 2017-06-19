import React from 'react'
import Message from '../Message/Message'

export default function MessageList(props) {
   const messages = props.messages.map(message => ((<Message key={message.id} message={message}/>)))
   return (
      <div className="message-list">
         {messages}
      </div>
   )
}
import React, {Component} from 'react'

import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'

import './MessageContainer.css'

export default function MessageContainer(props) {
   return (
      <div className="message-container">
         <h1>MessageContainer</h1>
         <MessageList messages={props.messages} />
         <MessageInput emitMessage={props.emitMessage} />
      </div>
   )

}

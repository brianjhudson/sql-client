import React, {Component} from 'react'

import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'

import './MessageContainer.css'

export default function MessageContainer(props) {
   return (
         <div className="message-container col-xs-12 col-sm-4 col-md-3">
            <div className="row">
               <ul className="nav nav-pills">
                  <li className="active"><a>Chat</a></li>
               </ul>
            </div>
            <MessageList messages={props.messages} />
            <MessageInput emitMessage={props.emitMessage} />
         </div>
   )

}

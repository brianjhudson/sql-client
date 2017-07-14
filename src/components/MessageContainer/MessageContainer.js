import React, {Component} from 'react'

import MessageList from '../MessageList/MessageList'
import MessageInput from '../MessageInput/MessageInput'

import './MessageContainer.css'

const BASE_URL = 'https://www.postgresql.org'
const SEARCH_URL =  '/search/?q='
export default class MessageContainer extends Component {
   constructor() {
      super()
      this.state = {
         messageView: true,
         url: BASE_URL  
      }

      this.searchDocs = this.searchDocs.bind(this)
   }

   viewMessages(messageView) {
      this.setState({messageView})
   }

   searchDocs(searchTerm) {
      this.setState({url: BASE_URL + SEARCH_URL + searchTerm})
   }
   render() {
      return (
            <div className="message-container col-xs-12 col-sm-4 col-md-3">
               <div className="row">
                  <ul className="nav nav-tabs nav-justified">
                     <li className={this.state.messageView ? "active": ""} onClick={() => this.viewMessages(true)}><a>Messages</a></li>
                     <li className={!this.state.messageView ? "active": ""} onClick={() => this.viewMessages(false)}><a>Docs</a></li>
                  </ul>
               </div>
               {
                  this.state.messageView
                  ? <MessageList messages={this.props.messages} />
                  : <iframe src={this.state.url} />
               }

               {
                  this.state.messageView
                  ? <MessageInput emitMessage={this.props.emitMessage} placeholder="Ask a question"/>
                  : <MessageInput emitMessage={this.searchDocs} placeholder="Search the docs"/>
               }
            </div>
      )
   }

}

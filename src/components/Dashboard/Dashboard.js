import React, {Component} from 'react'
import {connect} from 'react-redux';

import InfoContainer from '../InfoContainer/InfoContainer'
import QueryContainer from '../QueryContainer/QueryContainer'
import MessageContainer from '../MessageContainer/MessageContainer'

import './Dashboard.css'
const socket = window.io('/')
class Dashboard extends Component {
   constructor() {
      super()
      this.state = {
         messages: []
      }
      this.emitMessage = this.emitMessage.bind(this)

   }

   componentDidMount() {
      socket.emit('retrieveMessages')
      socket.on('newMessages', data => {
         const newMessages = this.state.messages.concat(data)
         this.setState({messages: newMessages})
      })
   }

   componentWillReceiveProps(nextProps) {

   }

   emitMessage(message) {
      socket.emit('postMessage', {user_id: this.props.user.id, message_text: message})
   }

   render() {
      return (
         <div className="container-fluid">
            <div className="row">
               <InfoContainer 
                  messages={this.state.messages} 
                  emitMessage={this.emitMessage} 
               />
               <QueryContainer 
                  messages={this.state.messages} 
                  emitMessage={this.emitMessage} 
               />
               <MessageContainer 
                  messages={this.state.messages} 
                  emitMessage={this.emitMessage} 
               />
            </div>
         </div>
      )
   }
}

function mapStateToProps(state) {
   return {
      user: state.user.user,
   }
}
const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
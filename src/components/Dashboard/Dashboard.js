import React, {Component} from 'react'
import {connect} from 'react-redux';

import MessageContainer from '../MessageContainer/MessageContainer'

import './Dashboard.css'
const socket = window.io('http://localhost:4000')
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
      console.log("Are you here?")
      console.log(message)
      console.log(this.props)
      socket.emit('postMessage', {user_id: this.props.user.id, message_text: message})
   }

   render() {
      return (
         <div>
            <h1>Dashboard</h1>
            <MessageContainer messages={this.state.messages} emitMessage={this.emitMessage} />
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
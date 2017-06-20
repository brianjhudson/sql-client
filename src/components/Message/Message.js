import React from 'react'

import './Message.css'

export default function Message(props) {
   const {message} = props
   const date = new Date(message.message_date).toLocaleTimeString().split(':')
   const hours = date[0]
   const minutes = date[1]
   const half = date[2].split(' ')[1]
   return (

      <div className="message">
         <div className="message-image-container">
            <img className="message-profile-image" src={message.github_avatar} alt=""/>
         </div>
         <div className="message-message-container">
            <div className="message-info">
               <h4>{message.first_name}</h4>
               <h5>{hours}:{minutes} {half}</h5>
            </div>
            <p>{message.message_text}</p>
         </div>
      </div>
   )
}
import React from 'react'

export default function Message(props) {
   const {message} = props
   return (
      <div className="message row">
         <img src={message.github_avatar} alt=""/>
         <h4>{message.first_name}</h4>
         <h5>{message.message_date}</h5>
         <p>{message.message_text}</p>
      </div>
   )
}
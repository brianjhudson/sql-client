import React from 'react'

export default function History(props) {
   const history = props.history.map((query, index) => {
      return (
         <li key={index} onClick={() => {props.postQuery(query)}}>{query}</li>
      )
   })
   return (
      <div>
         <h3>History</h3>
         <ul>
            {history}
         </ul>
      </div>
   )
}
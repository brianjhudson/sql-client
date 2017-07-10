import React from 'react'
import {connect} from 'react-redux'

import './History.css'

function History(props) {
   const history = props.history.map((query, index) => {
      const heading = query.split(" ")[0]
      return (
         <div className={props.currentQuery === query? "row history-item active": "row history-item"} key={index} onClick={() => {props.postQuery(query)}}>
            <h4>{heading}</h4>
            <li>{query}</li>
         </div>
      )
   })
   return (
      <div>
         <ul className="history-list">
            {history}
         </ul>
      </div>
   )
}

function mapStateToProps(state) {
   return {currentQuery: state.sql.currentQuery}
}
export default connect(mapStateToProps, {})(History)
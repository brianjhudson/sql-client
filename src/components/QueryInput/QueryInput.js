import React, {Component} from 'react'

import './QueryInput.css'

export default class QueryInput extends Component {
   constructor() {
      super()
      this.state = {
         query: ""
      }
      this.changeQuery = this.changeQuery.bind(this)
   }

   changeQuery(e) {
      console.log(e.target)
      this.setState({query: e.target.value})
   }

   render() {
      return (
         <div className="query-input-container">
            <div className="row">
               <button className="btn btn-primary" onClick={() => this.props.submitQuery(this.state.query)}>Submit</button>
            </div>
            <div className="row">
               <textarea
                  placeholder="Enter your query here"
                  value={this.state.query}
                  onChange={this.changeQuery}
               >
               </textarea>
            </div>
         </div>
      )
   }
}
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

   componentWillReceiveProps(nextProps) {
      if (nextProps.currentQuery !== this.state.query) {
         this.setState({query: nextProps.currentQuery})
      }
   }

   changeQuery(e) {
      this.setState({query: e.target.value})
   }

   render() {
      return (
         <div className="query-input-container">
            <div className="row">
               <button className="btn btn-primary" onClick={() => this.props.submitQuery(this.state.query)}>Submit</button>
            </div>
            <div className="row textarea-container">
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
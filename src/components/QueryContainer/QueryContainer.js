import React, {Component} from 'react'
import {connect} from 'react-redux'

import {postQuery} from '../../ducks/sql'

import QueryInput from '../QueryInput/QueryInput'
import QueryResults from '../QueryResults/QueryResults'

import './QueryContainer.css'

class QueryContainer extends Component {
   constructor() {
      super()
      this.submitQuery = this.submitQuery.bind(this)
   }
   submitQuery(query) {
      this.props.postQuery(query)
   }
   render() {
      const {results, fields, rowCount, command, error, currentQuery} = this.props.sql
      return (
         <div className="query-container col-xs-12 col-sm-4 col-md-6">
            <QueryInput submitQuery={this.submitQuery} currentQuery={currentQuery} />
            <QueryResults 
               command={command}
               rowCount={rowCount}
               fields={fields} 
               results={results} 
               error={error}
            />
         </div>
      )
   }
}
function mapStateToProps(state) {
   return {
      sql: state.sql
   }
}
const mapDispatchToProps = {
   postQuery
}
export default connect(mapStateToProps, mapDispatchToProps)(QueryContainer)
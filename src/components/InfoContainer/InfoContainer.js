import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getTables, postQuery} from '../../ducks/sql'

import TableList from '../TableList/TableList'
import History from '../History/History'

import './InfoContainer.css'
class InfoContainer extends Component {
   constructor() {
      super()
   }
   componentDidMount() {
      this.props.getTables()
   }
   render() {
      return (
         <div className="info-container col-xs-12 col-sm-4 col-md-3">
            <TableList tables={this.props.sql.tables}/>
            <History history={this.props.sql.history} postQuery={this.props.postQuery}/>
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
   getTables,
   postQuery
}
export default connect(mapStateToProps, mapDispatchToProps)(InfoContainer)
import React, {Component} from 'react'
import {connect} from 'react-redux'

import {getTables, postQuery} from '../../ducks/sql'

import TableList from '../TableList/TableList'
import History from '../History/History'

import './InfoContainer.css'
class InfoContainer extends Component {
   constructor() {
      super()
      this.state = {
         tableView: true
      }
      this.viewTables = this.viewTables.bind(this)
   }

   viewTables(tableView) {
      this.setState({tableView})
   }
   componentDidMount() {
      this.props.getTables()
   }
   render() {
      return (
         <div className="info-container col-xs-12 col-sm-4 col-md-3">
            <div className="row">
               <ul className="nav nav-tabs nav-justified">
                  <li className={this.state.tableView ? "active": ""} onClick={() => this.viewTables(true)}><a>Tables</a></li>
                  <li className={!this.state.tableView ? "active": ""} onClick={() => this.viewTables(false)}><a>History</a></li>
               </ul>
            </div>
            <div className="row info-container-view">
               {
                  this.state.tableView
                  ? <TableList tables={this.props.sql.tables}/>
                  :<History history={this.props.sql.history} postQuery={this.props.postQuery}/>
               }
            </div>
            
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
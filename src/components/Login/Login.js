import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/user'

import './Login.css'

class Login extends Component {
   componentDidMount() {
      this.props.getUser()

   }

   componentWillReceiveProps(nextProps) {
      console.log(nextProps)
      if (nextProps.user.id && nextProps.user.github_username !== 'guestuser') {
         this.props.history.push('/dashboard')
      }
   }
   render() {
      return (
         <div className="login container-fluid">
            <div className="row">
               <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h2>Login</h2>
                     </div>
                     <div className="panel-body">
                        <h4>Please login with Github to save your work</h4>
                        <div className="row">
                           <a className="github-login btn btn-default" href="/auth/github">
                              <h4>Login with Github</h4>
                           </a>                        
                        </div>
                        <div className="row">
                           <Link className="guest-login btn btn-default" to="/dashboard">
                              <h4>Enter as Guest</h4>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
function mapStateToProps(state) {
   return state.user
}

const mapDispatchToProps = {
   getUser
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
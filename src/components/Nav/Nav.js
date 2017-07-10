import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/user'

import './Nav.css'

function Nav(props) {
   return (
      <div className="navbar navbar-inverse">
         <div className="container-fluid">
            <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#mobile-nav">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
               </button>
               <Link className="navbar-brand" to="/">PG Playground</Link>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
               <ul className="nav navbar-nav navbar-right">
                  <li className="profile-container dropdown">
                  {
                     props.user.github_username === 'guestuser'
                     ?
                        <a className="auth-link" href="http://localhost:4000/auth/github">
                           <img src={props.user.github_avatar} alt=""/>
                        </a>
                     :
                        <a className="auth-link" onClick={this.props.logoutUser}>
                           <img src={props.user.github_avatar} alt=""/>
                        </a>

                  }
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

function mapStateToProps(state) {
   return state.user
}

const mapDispatchToProps = {
   logoutUser
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
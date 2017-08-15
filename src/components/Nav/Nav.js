import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/user'

import './Nav.css'

function Nav({logoutUser, github_username, github_avatar, match}) {
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
               <Link className="navbar-brand" to="/">
                  <div className="brand-logo"></div>
                  <div className="sr-only">PG Playground</div>
               </Link>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
               <ul className="nav navbar-nav navbar-right">
                  <li className="profile-container dropdown">          
                     {
                        github_username === 'guestuser'
                        ?
                        <a href="/auth/github">
                           <div className="hidden-xs login-container" style={{backgroundImage: `url(${github_avatar})`}}>
                              <div className="login-link">
                                 <p>Login</p>
                              </div>
                           </div>
                           <div className="visible-xs">Login</div>
                        </a>
                        :
                        <a onClick={e => {e.preventDefault(); logoutUser()}} >
                           <div className="hidden-xs login-container" style={{backgroundImage: `url(${github_avatar})`}}>
                              <div className="login-link">
                                 <p>Logout</p>
                              </div>
                           </div>
                           <div className="visible-xs">Logout</div>                      
                        </a>
                     }         
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = ({user}) => {
   return {
      github_avatar: user.user.github_avatar,
      github_username: user.user.github_username
   }
}

export default connect(mapStateToProps, {logoutUser})(Nav)
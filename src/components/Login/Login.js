import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {getUser} from '../../ducks/user'
import {showLoginModal} from '../../ducks/modal'

import LoginModal from '../LoginModal/LoginModal'
import './Login.css'

class Login extends Component {
   componentDidMount() {
      this.props.getUser()

   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.user.id && nextProps.user.github_username !== 'guestuser') {
         this.props.history.push('/dashboard')
      }
   }
   render() {
      const {viewLoginModal, showLoginModal} = this.props
      return (
         <div className="login container-fluid">
            <div className="row">
               <header className="col-md-8 col-md-offset-2">
                  <div className="header-marquee">
                     <h1 className="header-title">
                        Come learn <span className="header-title-postgres">PostgreSQL</span> with us!
                     </h1>
                     <h2 className="header-subtitle">
                        <div className="header-subtitle-typing">
                           <span className="header-subtitle-keyword">select</span>&nbsp;fun&nbsp;
                           <span className="header-subtitle-keyword">from</span> sql;
                        </div>
                     </h2>
                     <div className="header-login-button-container">
                        <button onClick={() => {this.props.showLoginModal()}} className="header-login-button btn btn-default">Get Started</button>
                     </div>
                  </div>
               </header>
            </div>
            {viewLoginModal ? <LoginModal /> : null}
         </div>
      )
   }
}
const mapStateToProps = ({user, modal}) => {
   return {
      user: user.user,
      viewLoginModal: modal.viewLoginModal
   }
}

export default withRouter(connect(mapStateToProps, {showLoginModal, getUser})(Login))
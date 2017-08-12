import React from 'react'
import {Link} from 'react-router-dom'

import './LoginModal.css'

export default function LoginModal() {
   return (
      <div className="modal-container">
         <div className="modal-body col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
            <div className="panel panel-default">
               <div className="panel-heading">
                  <h2>Welcome!</h2>
               </div>
               <div className="panel-body">
                  <h4>Join us to explore and practice PostgreSQL.</h4>
                  <div className="row">
                     <a className="github-login btn btn-primary" href="/auth/github">
                        <h4>Login with Github</h4>
                     </a>                        
                  </div>
                  <div className="row">
                     <Link className="guest-login btn btn-success" to="/dashboard">
                        <h4>Enter as Guest</h4>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
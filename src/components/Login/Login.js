import React from 'react'
import {Link} from 'react-router-dom'

import './Login.css'

export default function() {
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
                        <a className="github-login btn btn-default" href="http://localhost:4000/auth/github">
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
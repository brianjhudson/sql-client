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
                     <a className="github-login btn btn-default" href="/auth/github">
                        <svg aria-hidden="true" className="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
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
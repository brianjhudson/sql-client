import React from 'react'
import {Link} from 'react-router-dom'

import './Nav.css'

export default function() {
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
                  Brian's SQL App
               </Link>
            </div>
            <div className="collapse navbar-collapse" id="mobile-nav">
               <ul className="nav navbar-nav">
                  <li>
                     <Link to="/">Login</Link>
                  </li>
                  <li>
                     <Link to="/dashboard">Dashboard</Link>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}
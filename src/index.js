import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import {Provider} from 'react-redux';

import App from './App';
import store from './store';

import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <Route path="/" component={App} />
      </Provider>
   </BrowserRouter>

   , document.getElementById('root')
);
registerServiceWorker();

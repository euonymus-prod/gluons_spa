import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

class Signup extends Component {
 render () {
  return (
   <div>
      <Navbar />

      <div className="container">
         <div className="logo-top">
            <h1>Sign up</h1>
         </div>
         <div>
            <form method="post" acceptCharset="utf-8" className="search_top text-centerh" action="/users/add">
               <div style={{display:'none'}}><input type="hidden" name="_method" value="POST"/></div>
               <div className="form-group center-block input-container-signup">
                  <div className="input text required">
                     <label htmlFor="username">Username</label>
                     <input type="text" name="username" className="form-control" required="required" maxLength="50" id="username" value=""/>
                  </div>
                  <div className="input password required">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className="form-control" required="required" id="password" value=""/>
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit">Sign up</button>
               </div>
            </form>
         </div>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
export default connect(state => state)(Signup);

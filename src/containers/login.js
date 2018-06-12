import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

class Login extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
   <div>
      <Navbar />

      <div className="container">
         <div className="logo-top">
            <h1>Login</h1>
            <p>Login to create your own gluons</p>
         </div>
         <div>
            <form method="post" acceptCharset="utf-8" className="search_top text-centerh" action="/users/login">
               <div style={{display:'none'}}><input type="hidden" name="_method" value="POST"/></div>
               <div className="form-group center-block input-container-signup">
                  <div className="input text">
                     <label htmlFor="username">Username</label>
                     <input type="text" name="username" className="form-control" id="username"/>
                  </div>
                  <div className="input password">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className="form-control" id="password"/>
                  </div>
                  <br />
                  <button className="btn btn-primary" type="submit">Login</button>
               </div>
            </form>
         </div>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
export default connect(state => state)(Login);

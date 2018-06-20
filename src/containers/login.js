import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {execLogin} from '../actions/login';
import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

class Login extends Component {
    constructor() {
	super();
	this.state = {
	    username: '',
	    password: []
	};
	this.handleLogin = this.handleLogin.bind(this);
    }

    handleUsernameChange = (event) => {
	this.setState({username: event.target.value});
    }
    handlePasswordChange = (event) => {
	this.setState({password: event.target.value});
    }
    handleLogin(event) {
	event.preventDefault();
	this.props.execLogin(this.state.username, this.state.password);
    };

 render () {
  return (
   <div>
      <Navbar />

      <div className="container">
         <div className="logo-top">
            <h1>Login</h1>
            <p>Login to create your own gluons</p>
         </div>
         <div>
            <form method="post" acceptCharset="utf-8" className="search_top text-centerh" onSubmit={this.handleLogin}>
               <div style={{display:'none'}}><input type="hidden" name="_method" value="POST"/></div>
               <div className="form-group center-block input-container-signup">
                  <div className="input text">
                     <label htmlFor="username">Username</label>
                     <input type="text" name="username" className="form-control" id="username"
                            value={this.state.username}
                            onChange={this.handleUsernameChange} />
                  </div>
                  <div className="input password">
                     <label htmlFor="password">Password</label>
                     <input type="password" name="password" className="form-control" id="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange} />
                  </div>
                  <br />
                  <button className="btn btn-primary" type="button" type="submit">Login</button>
               </div>
            </form>
         </div>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
// export default connect(state => state)(Login);
export default connect(state => state, { execLogin })(Login);

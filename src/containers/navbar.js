import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
<nav className="navbar navbar-default navbar-static-top">
  <div className="container">

    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="/" className="navbar-brand"><img src="/img/logo.gif" /></Link>
    </div>

    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><Link to="/subjects">一覧</Link></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
   
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
   
      </ul>
    </div>

  </div>
</nav>    
  )
 }
}
export default connect(state => state)(Navbar);

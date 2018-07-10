// general
// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
// component
import SearchBar from './search_bar';
import QuarkNav from './quark_nav';
import BaryonNav from './baryon_nav';
// action
import {execLogout} from '../actions/login';
import { fetchQtypeProperties } from '../actions/qtype_properties';
// common util
import LoginUtil from '../utils/login';

class Navbar extends Component {
    constructor(props) {
        super(props);
	this.onLogoutClick = this.onLogoutClick.bind(this);
	this.execLogout = props.execLogout.bind(this);
    }

    componentWillMount() {
        if (!this.props.qtype_properties) {
            this.props.fetchQtypeProperties();
        }
    }

    onLogoutClick() {
	this.execLogout();
    }

    renderSearchBar () {
       if (this.props.withSearchBar) {
           return (
              <SearchBar />
           );
       }
       return '';
    }

    render () {
        const { logged_in_user } = this.props;
	const login_util = new LoginUtil();

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
      {this.renderSearchBar()}
    </div>

    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav">
        <li><Link to="/subjects">一覧</Link></li>
      </ul>

      {(() => { if (login_util.isLoggedIn(logged_in_user)) { return (


        <ul className="nav navbar-nav navbar-right">
           <li><Link to={'/subjects/add'} >New Quark</Link></li>

           <QuarkNav />
           <BaryonNav />

           <li className="dropdown">
              <a href="javascript:void(0)" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{ logged_in_user.username } <span className="caret"></span></a>
              <ul className="dropdown-menu">
                 <li><Link to={`/users/edit/${logged_in_user.id}`}>Edit User</Link></li>
                 <li role="separator" className="divider"></li>
                 <li className="dropdown-header">Privacy Modes</li>

              {(() => { if (login_util.isAdmin(logged_in_user)) { return (
                 <li><Link to={'/users/privacy/4'}>Admin</Link></li>
              );} })()}

                 <li><Link to={'/users/privacy/1'}>Public</Link></li>
                 <li><Link to={'/users/privacy/2'}>Private</Link></li>
                 <li><Link to={'/users/privacy/3'}>All</Link></li>
                 <li role="separator" className="divider"></li>
                 <li><a href="javascript:void(0)" onClick={this.onLogoutClick}>Logout</a></li>
              </ul>
           </li>
        </ul>


      );} else { return (

        <ul className="nav navbar-nav navbar-right">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>

      );} })()}
   
    </div>

  </div>
</nav>    
  )
 }
}
export default connect(state => state, { fetchQtypeProperties, execLogout })(Navbar);

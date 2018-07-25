// general
// react
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
// component
import SearchBar from '../components/search_bar';
import QuarkNav from './quark_nav';
import BaryonNav from './baryon_nav';
// action
import {execLogout} from '../actions/login';
import { fetchQtypeProperties } from '../actions/qtype_properties';
import { changePrivacyTo } from '../actions/privacy';

// common util
import LoginUtil from '../utils/login';

class Navbar extends Component {
    constructor(props) {
        super(props);
	this.onLogoutClick = this.onLogoutClick.bind(this);
	this.execLogout = props.execLogout.bind(this);

	this.changePrivacyTo = this.changePrivacyTo.bind(this);
	this.onPrivacyPublicClick = this.onPrivacyPublicClick.bind(this);
	this.onPrivacyPrivateClick = this.onPrivacyPrivateClick.bind(this);
	this.onPrivacyAllClick = this.onPrivacyAllClick.bind(this);
	this.onPrivacyAdminClick = this.onPrivacyAdminClick.bind(this);
    }

    componentWillMount() {
        if (!this.props.qtype_properties) {
            this.props.fetchQtypeProperties();
        }
    }

    onLogoutClick() {
	this.execLogout();
    }

    onPrivacyPublicClick() {
	this.changePrivacyTo(1);
    }
    onPrivacyPrivateClick() {
	this.changePrivacyTo(2);
    }
    onPrivacyAllClick() {
	this.changePrivacyTo(3);
    }
    onPrivacyAdminClick() {
	this.changePrivacyTo(4);
    }
    changePrivacyTo(privacy_id) {
	this.props.changePrivacyTo(privacy_id)
    }

    renderSearchBar () {
	//console.log(this.props.location.pathname)
	let patterns = ['^\/(?!\/)$', '^\/login\/?', '^\/signup\/?',
			'^\/subjects\/add\/?', '^\/subjects\/edit\/', '^\/relations\/add\/?', '^\/relations\/edit\/']

	let withSearchBar = true
	patterns.map(x => {
	    if (this.props.location.pathname.match(x)) {
		withSearchBar = false
	    }
	});

       if (withSearchBar) {
           return (
              <SearchBar type="navbar" />
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
                 <li><a href="javascript:void(0)" name="privacy_4" onClick={this.onPrivacyAdminClick} >Admin</a></li>
              );} })()}

                 <li><a href="javascript:void(0)" name="privacy_1" onClick={this.onPrivacyPublicClick} >Public</a></li>
                 <li><a href="javascript:void(0)" name="privacy_2" onClick={this.onPrivacyPrivateClick} >Private</a></li>
                 <li><a href="javascript:void(0)" name="privacy_3" onClick={this.onPrivacyAllClick} >All</a></li>

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
export default withRouter(connect(state => state, { fetchQtypeProperties, execLogout, changePrivacyTo })(Navbar));

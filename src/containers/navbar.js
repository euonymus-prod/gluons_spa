import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component {

    renderSearchBar () {
	if (this.props.withSearchBar) {
	    return (
      <form method="get" acceptCharset="utf-8" className="navbar-form navbar-left" role="search" action="/subjects/search">
         <div style={{display:'none'}}>
            <input type="hidden" name="_method" value="POST"/>
         </div>
         <div className="input-group">
            <input type="text" name="keywords" placeholder="Search" className="form-control" id="keywords"/>
            <span className="input-group-btn">
               <button className="btn btn-default" type="submit">Go</button>
            </span>
         </div>
		    </form>
	    );
	}
	return '';
    }
    
 render () {
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

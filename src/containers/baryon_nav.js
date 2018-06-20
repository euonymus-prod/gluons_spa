import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

class BaryonNav extends Component {
    renderGoToBaryon = (quark_id) => {
	return (
           <li><Link to={`/baryons/quark/${quark_id}`}>Go to Baryon</Link></li>
	);
    }

    render () {
        const { quark, logged_in_user } = this.props;
	if (!logged_in_user) {
	    return '';
	}
	var re = new RegExp("^\/subjects\/relations\/");
	if (!re.test(this.props.location.pathname) || !quark) {
	    return '';
        }
	return (
           <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Baryon<span className="caret"></span></a>
              <ul className="dropdown-menu">
                 <li><Link to={'/baryons'}>My Baryons</Link></li>
                 {this.renderGoToBaryon(this.props.quark.id)}
              </ul>
           </li>
	)
    }
}
export default withRouter(connect(state => state)(BaryonNav));

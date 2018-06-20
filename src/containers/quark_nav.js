import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {deleteQuark} from '../actions/quark';

class QuarkNav extends Component {
    onDeleteClick = () => {
	let r = confirm(`Are you sure you want to delete ${this.props.quark.name}?`);
	if (r == true) {
	    this.props.deleteQuark(this.props.quark.id);
	    this.props.history.push('/subjects');
	}
    }

    render () {
        const { quark, logged_in_user } = this.props;

	var re = new RegExp("^\/subjects\/relations\/");

	if (!re.test(this.props.location.pathname) || !quark) {
	    return '';
	}
	if (quark.is_exclusive && logged_in_user.id != quark.user_id) {
	    return '';
	}

	return (
           <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quark <span className="caret"></span></a>
              <ul className="dropdown-menu">
                 <li><Link to={`/subjects/edit/${quark.id}`}>Edit Quark</Link></li>
                 <li><a href="#" onClick={this.onDeleteClick}>Delete</a></li>
              </ul>
           </li>
	)
    }
}
export default withRouter(connect(state => state, { deleteQuark })(QuarkNav));

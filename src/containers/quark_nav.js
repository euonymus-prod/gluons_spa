import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';
import {deleteQuark, removeDeletedQuark} from '../actions/quark';

class QuarkNav extends Component {
    componentWillReceiveProps(nextProps) {
        const { deleted_quark } = this.props;
	if (nextProps.deleted_quark) {
	    let r = alert(nextProps.deleted_quark.message);
	    this.props.removeDeletedQuark();

	    if (nextProps.deleted_quark.status == 1) {
		this.props.history.push('/subjects');
	    }
	}
    }

    onDeleteClick = () => {
	let r = confirm(`Are you sure you want to delete ${this.props.current_quark.name}?`);
	if (r == true) {
	    this.props.deleteQuark(this.props.current_quark.id);
	}
    }

    render () {
        const { current_quark, logged_in_user } = this.props;

	var re = new RegExp("^\/subjects\/relations\/");
	if (!re.test(this.props.location.pathname) || !current_quark) {
	    return '';
	}
	if ((logged_in_user.role != 'admin') && current_quark.is_exclusive && (logged_in_user.id != current_quark.user_id)) {
	    return '';
	}

	return (
           <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quark <span className="caret"></span></a>
              <ul className="dropdown-menu">
                 <li><Link to={`/subjects/edit/${current_quark.id}`}>Edit Quark</Link></li>
                 <li><a href="#" onClick={this.onDeleteClick}>Delete</a></li>
              </ul>
           </li>
	)
    }
}
export default withRouter(connect(state => state, { deleteQuark, removeDeletedQuark })(QuarkNav));

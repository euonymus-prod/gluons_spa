import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
// import { API_HOST } from '../statics';
// --------------------------------------------------------
import { fetchPickups } from '../actions/quark';
// --------------------------------------------------------

import TopPickupDetail from './top_pickup_detail';

class TopPickups extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties } = this.props;
	this.props.fetchPickups(qtype_properties);
    }
    // --------------------------------------------------------

    renderPickups() {
	const { pickups } = this.props;
	return _.map(pickups, pickup => {
	    return (
               <div key={pickup.id} className="col-md-3">
                  <TopPickupDetail pickup={pickup}/>
               </div>
	    );
	});
    }

    render () {
	const { pickups } = this.props;
	if (pickups.length == 0) {
	    return '';
	}

	return (
           <div className="top-pickup-links center-block">
                <div className="row">
                   {this.renderPickups()}
		</div>
           </div>
	)
    }
}
export default connect(state => state, { fetchPickups })(TopPickups);

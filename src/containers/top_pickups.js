import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

import TopPickupDetail from './top_pickup_detail';

class TopPickups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pickups: [],
        };
	this.fetchPickups();
    }

    fetchPickups () {
	const ROOT_URL = 'http://' + API_HOST + '/';
	const API_KEY = '?key=euonymus';

	axios.get(`${ROOT_URL}pickups${API_KEY}`)
	    .then((response) => {
		this.setState({pickups: response.data});
	    });
    }

    renderPickups() {
	return _.map(this.state.pickups, pickup => {
	    return (
               <div key={pickup.id} className="col-md-3">
                  <TopPickupDetail pickup={pickup}/>
               </div>
	    );
	});
    }

    render () {
	return (
           <div className="top-pickup-links center-block">
                <div className="row">
                   {this.renderPickups()}
		</div>
           </div>
	)
    }
}
export default connect(state => state)(TopPickups);

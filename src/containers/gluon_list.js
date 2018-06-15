import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

import Gluon from './gluon';

class GluonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gluons: [],
        };
	this.fetchGluons(this.props.quark_id, this.props.quark_property_id);
    }

    fetchGluons (quark_id, quark_property_id) {
	const ROOT_URL = 'http://' + API_HOST + '/';
	const API_KEY = '?key=euonymus';
	
	axios.get(`${ROOT_URL}gluons/${quark_id}/${quark_property_id}${API_KEY}`)
	    .then((response) => {
		this.setState({gluons: response.data});
	    });
    }

    renderGluon() {
	return _.map(this.state.gluons, gluon => {
	    return (
		<div key={gluon.id}>
                    <Gluon gluon = {gluon} />
		</div>
	    );
	});
    }

    render () {
	if (this.state.gluons.length == 0) {
	    return '';
	}

	return (
           <div>
               <h2>{this.props.quark_property_caption}</h2>
               <div className="related" >
                   <div className="well subject-relation white">
                       {this.renderGluon()}
                   </div>
               </div>
	   </div>
	)
    }
}

export default connect(state => state)(GluonList);

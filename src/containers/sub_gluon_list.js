import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

import SubGluon from './sub_gluon';

class SubGluonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gluons: [],
        };
	console.log(this.props.sub_gluon_side);
	this.fetchSubGluons(this.props.sub_quark.id, this.props.sub_gluon_side);
    }

    fetchSubGluons (quark_id, quark_property_id) {
	const ROOT_URL = 'http://' + API_HOST + '/';
	const API_KEY = '?key=euonymus';
	
	axios.get(`${ROOT_URL}gluons/${quark_id}/${quark_property_id}${API_KEY}`)
	    .then((response) => {
		this.setState({gluons: response.data});
	    });
    }

    render () {
	return (
          <div className="subject-relation-sub">
              <div className="well ">
                 <h4>{this.props.sub_quark.name}とは</h4>
                 {this.props.sub_quark.description}
                 <ul className="subject-list-relation">
                    <SubGluon />
                 </ul>
              </div>
           </div>
	)
    }
}
export default connect(state => state)(SubGluonList);

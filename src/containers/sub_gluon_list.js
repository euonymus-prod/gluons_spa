import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

// --------------------------------------------------------
import { fetchGluons } from '../actions/gluons';
// --------------------------------------------------------
import SubGluon from './sub_gluon';

class SubGluonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gluons: [],
        };

	// if (['active', 'passive'].includes(props.sub_gluon_side)) {
	//     this.fetchSubGluons(props.sub_quark.id, props.sub_gluon_side);
	// }
    }

    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties, sub_quark, sub_gluon_side } = this.props;
	if (['active', 'passive'].includes(sub_gluon_side)) {
		//console.log(sub_quark);
		this.props.fetchGluons(sub_quark, qtype_properties);
	}
    }
    // --------------------------------------------------------

/*
    componentWillReceiveProps(nextProps) {
	if (nextProps.sub_gluon_side) {
	    if (!this.props.sub_gluon_side || nextProps.sub_gluon_side != this.props.sub_gluon_side) {
		if (['active', 'passive'].includes(this.props.sub_gluon_side)) {
		    this.fetchSubGluons(this.props.sub_quark.id, nextProps.sub_gluon_side);
		}
	    }
        }
    }

    fetchSubGluons (quark_id, quark_property_id) {
	const ROOT_URL = 'http://' + API_HOST + '/';
	const API_KEY = '?key=euonymus';
	
	axios.get(`${ROOT_URL}gluons/${quark_id}/${quark_property_id}${API_KEY}`)
	    .then((response) => {
		this.setState({gluons: response.data});
	    });
    }
*/

    renderSubGluon() {
	const { sub_quark } = this.props;
	if (!sub_quark.is_gluon_fetched) {
	    return <div></div>
	}
/*
	return _.map(this.state.gluons, gluon => {
	    return (
		<div key={gluon.id}>
		    <hr style={{ margin:'5px'}}/>
                    <SubGluon sub_quark_id={this.props.sub_quark.id} gluon={gluon} />
		</div>
	    );
	});
*/
    }

    render () {
// console.log('xxxxxxxxxxxx');
// console.log(this.props.sub_quark);
// console.log(this.props.quarks);
// console.log('xxxxxxxxxxxx');
	if (!this.props.sub_quark.is_gluon_fetched) {
	    return '';
	}

	return (
          <div className="subject-relation-sub">
              <div className="well ">
                 <h4>{this.props.sub_quark.name}とは</h4>
                 {this.props.sub_quark.description}
                 <ul className="subject-list-relation">
                    {this.renderSubGluon()}
                 </ul>
              </div>
           </div>
	)
    }
}
export default connect(state => state, { fetchGluons })(SubGluonList);

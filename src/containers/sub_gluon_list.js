import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

// --------------------------------------------------------
import { fetchGluons } from '../actions/gluon';
// --------------------------------------------------------
import SubGluon from './sub_gluon';

class SubGluonList extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties, sub_quark, sub_gluon_side } = this.props;
	if (['active'].includes(sub_gluon_side)) {
	    this.props.fetchGluons(sub_quark, qtype_properties);
	}
    }
    // --------------------------------------------------------

    renderSubGluon() {
	const { quarks, sub_quark } = this.props;

	return _.map(quarks.list[sub_quark.id].quark_properties, quark_property => {
	    if (!quark_property) {
		return null;
	    }
	    // return _.map(quark_property.quark_property.gluons, gluon => {
	    return _.map(_.take(quark_property.quark_property.gluons, 5), (gluon) => {
		return (
                   <div key={gluon.id}>
                      <hr style={{ margin:'5px'}}/>
                      <SubGluon sub_quark_id={this.props.sub_quark.id} gluon={gluon} />
                   </div>
                );
	    });
	});
    }

    render () {
	const { quarks, sub_quark, sub_gluon_side } = this.props;
	if (!quarks.list[sub_quark.id] || !quarks.list[sub_quark.id].is_gluon_fetched) {
	    return '';
	}
	if (sub_gluon_side == 'none') {
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

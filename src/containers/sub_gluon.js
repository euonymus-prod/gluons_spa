import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Util from '../common';

class SubGluon extends Component {
    gluedQuark() {
	if (this.props.sub_quark_id == this.props.gluon.active_id) {
	    return this.props.gluon.passive
	} else if (this.props.sub_quark_id == this.props.gluon.passive_id) {
	    return this.props.gluon.active
	}
	return '';
    }

    render () {
	let util = new Util();
	return (
           <li>
              <a href={`/subjects/relations/${this.gluedQuark().name}`}>
                 <img src={this.gluedQuark().image_path} width="40px" height="40px" alt=""/>
              </a>
              <a href={`/subjects/relations/${this.gluedQuark().name}`}>{this.gluedQuark().name}</a>
              {this.props.gluon.relation} {this.props.gluon.suffix}
              <br />
              {util.period2str(this.props.gluon.suffix)}
           </li>
	)
    }
}
export default connect(state => state)(SubGluon);

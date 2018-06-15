import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SubGluon from './sub_gluon';

class SubGluonList extends Component {
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

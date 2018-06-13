import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SubGluon from './sub_gluon';

class SubGluonList extends Component {
 render () {
  return (
       <div className="subject-relation-sub">
          <div className="well ">
             <h4>イヴァナ・マリエ・トランプとは</h4>
             Ivana Marie Trump。チェコスロバキア出身のアメリカの実業家。元ファッションモデル
             <ul className="subject-list-relation">
                <SubGluon />
             </ul>
          </div>
       </div>
  )
 }
}
export default connect(state => state)(SubGluonList);

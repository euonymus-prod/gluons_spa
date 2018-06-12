import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

import SubGluon from './sub_gluon';

class SubGluonList extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

import SubGluonList from './sub_gluon_list';

class Gluon extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
    <div className="subject-relation white">
       <div className="subject-relation-main">
          <div className="media">
             <div className="media-left subject-image">
                <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97"><img src="https://s-media-cache-ak0.pinimg.com/736x/10/c3/cf/10c3cf433215208b44d46b400786ace6.jpg" width="100px" height="100px" alt=""/></a>    
             </div>
             <div className="media-body">
                <h4 className="media-heading">
                   <a href="/subjects/relations/%E3%82%A4%E3%83%B4%E3%82%A1%E3%83%8A%E3%83%BB%E3%83%9E%E3%83%AA%E3%82%A8%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97">イヴァナ・マリエ・トランプ</a> はドナルド・トランプの元妻    
                </h4>
                <p>(1977-04 ~ 1992)</p>
             </div>
          </div>
       </div>
       <SubGluonList />
    </div>
  )
 }
}
export default connect(state => state)(Gluon);

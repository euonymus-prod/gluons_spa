import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

import GluonList from './gluon_list';

class GluonTypeList extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
     <div>
        <GluonList />
     </div>
  )
 }
}
export default connect(state => state)(GluonTypeList);

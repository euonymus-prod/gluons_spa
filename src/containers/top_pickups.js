import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import TopPickupDetail from './top_pickup_detail';

class TopPickups extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
    <div className="top-pickup-links center-block">
        <div className="row">
            <TopPickupDetail />
        </div>
    </div>
  )
 }
}
export default connect(state => state)(TopPickups);

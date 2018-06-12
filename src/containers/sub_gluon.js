import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

// import SubGluon from './sub_gluon';

class SubGluon extends Component {
 _onChange = (value) => {
   this.props.dispatch(setMessage(value))
 }
 render () {
  const {message} = this.props.messageReducer;
  return (
     <li>
        <a href="/subjects/relations/Riccardo%20Mazzucchelli">
           <img src="https://i0.heartyhosting.com/radaronline.com/wp-content/uploads/2017/09/ivana-trump-former-husband-riccardo-mazzucchelli-dies-pp-.jpg?fit=1200%2C765&ssl=1" width="40px" height="40px" alt=""/>
        </a>
        <a href="/subjects/relations/Riccardo%20Mazzucchelli">Riccardo Mazzucchelli</a>
        の元妻
        <br />
        (1995 ~ 1997)
     </li>
  )
 }
}
export default connect(state => state)(SubGluon);

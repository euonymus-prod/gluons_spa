import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GluonList from './gluon_list';

class GluonTypeList extends Component {
 render () {
  return (
     <div>
        <GluonList />
     </div>
  )
 }
}
export default connect(state => state)(GluonTypeList);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initDetail} from '../actions/detail';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import MainQuark from './main_quark';
import QuarkPropertyList from './quark_property_list';

class Detail extends Component {
    constructor(props) {
        super(props);
	let sub_gluon_side = 'active';
	if ('sub_gluon_side' in this.props.match.params) {
	    sub_gluon_side = this.props.match.params.sub_gluon_side;
	}
	this.props.initDetail(sub_gluon_side);
    }

 render () {
  return (
   <div>
      <Navbar />

      <div className="container">
         <div className="row">

            <MainQuark quark_name={this.props.match.params.quark_name}/>

            <div className="col-md-9 subject-relation-list">
               <ul className="nav nav-pills">
                  <li role="presentation" className="active">
                     <a href={`/subjects/relations/${this.props.match.params.quark_name}/active`}>Active</a>
                  </li>
                  <li role="presentation">
                     <a href={`/subjects/relations/${this.props.match.params.quark_name}/passive`}>Passive</a>
                  </li>
                  <li role="presentation">
                     <a href={`/subjects/relations/${this.props.match.params.quark_name}/none`}>None</a>
                  </li>
               </ul>

               <QuarkPropertyList />
            </div>

         </div>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, { initDetail })(Detail);

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
	this.onLinkClick = this.onLinkClick.bind(this);
	this.initDetail = this.props.initDetail.bind(this);
    }

    onLinkClick(event) {
	event.preventDefault();

	console.log(event.target.name);
	this.initDetail(event.target.name);
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
                     <a href="#" name="active" onClick={this.onLinkClick} >Active</a>
                  </li>
                  <li role="presentation">
                     <a href="#" name="passive" onClick={this.onLinkClick} >Passive</a>
                  </li>
                  <li role="presentation">
                     <a href="#" name="none" onClick={this.onLinkClick} >None</a>
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

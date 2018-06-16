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

        this.state = {
	    activeActiveness:  'active',
	    passiveActiveness: '',
	    noneActiveness:    '',
        };

	let sub_gluon_side = 'active';
	if ('sub_gluon_side' in this.props.match.params) {
	    sub_gluon_side = this.props.match.params.sub_gluon_side;
	}
	this.props.initDetail(sub_gluon_side);

	this.onLinkClick = this.onLinkClick.bind(this);
	this.initDetail = this.props.initDetail.bind(this);
    }

    componentWillReceiveProps(nextProps) {
	if (nextProps.sub_gluon_side) {
	    if (!this.props.sub_gluon_side || nextProps.sub_gluon_side != this.props.sub_gluon_side) {
		if (nextProps.sub_gluon_side == 'active') {
		    this.setState({
			'activeActiveness':  'active',
			'passiveActiveness': '',
			'noneActiveness':    '',
		    })
		} else if (nextProps.sub_gluon_side == 'passive') {
		    this.setState({
			'activeActiveness':  '',
			'passiveActiveness': 'active',
			'noneActiveness':    '',
		    })
		} else if (nextProps.sub_gluon_side == 'none') {
		    this.setState({
			'activeActiveness':  '',
			'passiveActiveness': '',
			'noneActiveness':    'active',
		    })
		} else {
		    this.setState({
			'activeActiveness':  'active',
			'passiveActiveness': '',
			'noneActiveness':    '',
		    })
		}
	    }
        }
    }

    onLinkClick(event) {
	event.preventDefault();
	this.initDetail(event.target.name);
    }

 render () {

  return (
   <div>
      <Navbar withSearchBar='1' />

      <div className="container">
         <div className="row">

            <MainQuark quark_name={this.props.match.params.quark_name}/>

            <div className="col-md-9 subject-relation-list">
               <ul className="nav nav-pills">
                  <li role="presentation" className={this.state.activeActiveness}>
                     <a href="#" name="active" onClick={this.onLinkClick} >Active</a>
                  </li>
                  <li role="presentation" className={this.state.passiveActiveness}>
                     <a href="#" name="passive" onClick={this.onLinkClick} >Passive</a>
                  </li>
                  <li role="presentation" className={this.state.noneActiveness}>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {initDetail} from '../actions/detail';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import MainQuark from './main_quark';
import QuarkPropertyList from './quark_property_list';

// --------------------------------------------------------
import { fetchQtypeProperties } from '../actions/qtype_properties';
import { fetchCurrentQuark } from '../actions/quark';
// --------------------------------------------------------


class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
	    activeActiveness:  'active',
	    passiveActiveness: '',
	    noneActiveness:    '',
        };

	let sub_gluon_side = 'active';
	if ('sub_gluon_side' in props.match.params) {
	    sub_gluon_side = props.match.params.sub_gluon_side;
	}
	props.initDetail(sub_gluon_side);

	this.onLinkClick = this.onLinkClick.bind(this);
	this.initDetail = props.initDetail.bind(this);



	// --------------------------------------------------------
	if (!props.qtype_properties) {
	    props.fetchQtypeProperties();
	}
	// --------------------------------------------------------
    }

    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties, quarks, quark_name2id } = this.props;

	if (qtype_properties &&
	    (!quarks.has(this.props.match.params.quark_name) || !quark_name2id.has(this.props.match.params.quark_name)) ) {
	    this.props.fetchCurrentQuark(this.props.match.params.quark_name);
	}
    }
    // --------------------------------------------------------

    componentWillReceiveProps(nextProps) {

	// TODO: setCurrentQuark
	console.log(this.props.quark_name2id);
	console.log(this.props.quarks);

	
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
// --------------------------------------------------------
export default connect(mapStateToProps, { initDetail, fetchQtypeProperties, fetchCurrentQuark })(Detail);
// --------------------------------------------------------

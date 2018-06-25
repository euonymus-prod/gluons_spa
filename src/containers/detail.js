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
import { changeCurrentQuark } from '../actions/quark';
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

    componentWillReceiveProps(nextProps) {
        // --------------------------------------------------------
        const { qtype_properties, quarks, current_quark } = this.props;
        // initialize
        if (qtype_properties && (Object.keys(nextProps.quarks.list).length == 0) && (Object.keys(quarks.list).length == 0)) {
            this.props.fetchCurrentQuark(this.props.match.params.quark_name, qtype_properties);
        } else if (!nextProps.current_quark) {
	    let newQuark = nextProps.quarks.list[nextProps.quarks.quark_name2id[this.props.match.params.quark_name]]
	    if (newQuark) {
		this.props.changeCurrentQuark(newQuark);
	    }
	} else if (nextProps.match.params.quark_name != this.props.match.params.quark_name) {
	    let newQuark = nextProps.quarks.list[nextProps.quarks.quark_name2id[nextProps.match.params.quark_name]]
	    if (newQuark) {
	    	this.props.changeCurrentQuark(newQuark);
	    }
	}
	// --------------------------------------------------------
	
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
     const { current_quark } = this.props;
     if (!current_quark) {
         return (
           <div>
              <Navbar withSearchBar='1' />
              <div className="container">
                 <div className="row">
                    <div>Loading...</div>
                 </div>
              </div>
              <GlobalFooter />
           </div>
     	 );
     }
  return (
   <div>
      <Navbar withSearchBar='1' />

      <div className="container">
         <div className="row">

            <MainQuark quark={current_quark} quark_name={this.props.match.params.quark_name}/>

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
export default connect(mapStateToProps, { initDetail, fetchQtypeProperties, fetchCurrentQuark, changeCurrentQuark })(Detail);
// --------------------------------------------------------

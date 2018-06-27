import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import QuarkInList from '../components/quark_in_list';
// --------------------------------------------------------
import { fetchQuarks } from '../actions/quark';
// --------------------------------------------------------

class QuarkList extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties } = this.props;
	this.props.fetchQuarks(qtype_properties);
    }
    // --------------------------------------------------------

    renderQuarks() {
	const { current_quarks } = this.props;
	var first = current_quarks[0];
	return _.map(current_quarks, quark => {
	    return (
		<div key={quark.id}>
                    {(() => {
                        if (quark.id != first.id)
                        return <hr />;
                    })()}
                    <QuarkInList quark_in_list={quark} />
		</div>
	    );
	});
    }

    render () {
	const { current_quarks } = this.props;

	if (current_quarks.length == 0) {
	    return '';
	}

	return (
   <div>
      <Navbar withSearchBar='1' />

      <div className="container">
           <div>
               <h2>{this.props.quark_property_caption}</h2>
               <div className="related" >
                   <div className="well subject-relation white">
                       {this.renderQuarks()}
                   </div>
               </div>
	   </div>
      </div>

      <GlobalFooter />
   </div>
	)
    }
}

export default connect(state => state, { fetchQuarks })(QuarkList);


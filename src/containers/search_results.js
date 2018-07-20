// general
import _ from 'lodash';
import axios from 'axios';
// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
// component
import QuarkInList from '../components/quark_in_list';
// action
import { searchQuarks } from '../actions/quark';


class SearchResults extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties, privacy } = this.props;
	this.props.searchQuarks(qtype_properties, this.props.match.params.keywords, privacy);
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
	)
    }
}

export default connect(state => state, { searchQuarks })(SearchResults);

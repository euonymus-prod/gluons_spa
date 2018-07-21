// general
import axios from 'axios';
// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
// component
import QuarkInList from '../components/quark_in_list';
// action
import { fetchQuarks } from '../actions/quark';



class QuarkList extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { qtype_properties, privacy } = this.props;
	this.props.fetchQuarks(qtype_properties, privacy);
    }
    // --------------------------------------------------------

    componentWillReceiveProps(nextProps) {
	if (nextProps.current_quarks.length === 0) {
	    this.props.fetchQuarks(nextProps.qtype_properties, nextProps.privacy);
	}
    }

    renderQuarks() {
	const { current_quarks } = this.props;
	var first = current_quarks[0];
	if (!first.id) {
	    return 'failed to fetch';
	}

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

export default connect(state => state, { fetchQuarks })(QuarkList);


// general
import axios from 'axios';
// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// component
import Quarks from '../components/quarks';
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

    render () {
	const { current_quarks } = this.props;
	if (current_quarks.length === 0) {
	    return '';
	}
	return (
           <Quarks
              quark_property_caption="Quarks"
              current_quarks={current_quarks} />
	)
    }
}

export default connect(state => state, { fetchQuarks })(QuarkList);


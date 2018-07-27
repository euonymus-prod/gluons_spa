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
    state = {
	result: true
    }

    componentWillMount() {
	const { qtype_properties, privacy } = this.props;
	this.props.fetchQuarks(qtype_properties, privacy);
    }

    componentWillReceiveProps(nextProps) {
	// if ( next page ) {
	//     this.props.fetchQuarks(nextProps.qtype_properties, nextProps.privacy);
	// }
	if (nextProps.submit_count > this.props.submit_count) {
	    if (nextProps.current_quarks.length === 0) {
		this.setState({ result: false })
	    } else {
		this.setState({ result: true })
	    }
	}
    }

    render () {
	const { current_quarks } = this.props;
	return (
           <Quarks
              quark_property_caption="Quarks"
              current_quarks={current_quarks}
              result={this.state.result} />
	)
    }
}

export default connect(state => state, { fetchQuarks })(QuarkList);


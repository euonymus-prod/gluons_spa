// general
import axios from 'axios';
// react
import React, { Component } from 'react';
// redux
import { connect } from 'react-redux';
// component
import Quarks from '../components/quarks';
// action
import { searchQuarks } from '../actions/quark';


class SearchResults extends Component {
    componentWillMount() {
	const { qtype_properties, privacy } = this.props;
	this.props.searchQuarks(qtype_properties, this.props.match.params.keywords, privacy);
    }

    componentWillReceiveProps(nextProps) {
	if ((nextProps.current_quarks.length === 0) || (nextProps.match.params.keywords !== this.props.match.params.keywords)) {
	    this.props.searchQuarks(nextProps.qtype_properties, nextProps.match.params.keywords, nextProps.privacy);
	}
    }

    render () {
	const { current_quarks } = this.props;
	if (current_quarks.length === 0) {
	    return '';
	}
	return (
           <Quarks
              quark_property_caption={this.props.match.params.keywords + "の検索結果"}
              current_quarks={current_quarks} />
	)
    }
}

export default connect(state => state, { searchQuarks })(SearchResults);

import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import QuarkInSearch from '../components/quark_in_search';

class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quarks: [],
        };
	this.fetchSearch(this.props.match.params.keywords);
    }

    componentWillReceiveProps(nextProps) {
	if (nextProps.search_keyword) {
	    if (!this.props.search_keyword || nextProps.search_keyword != this.props.search_keyword) {
		this.fetchSearch(nextProps.search_keyword);
	    }
        }
    }

    fetchSearch (keywords) {
	const ROOT_URL = 'http://' + API_HOST + '/';
	const API_KEY = '?key=euonymus';

	axios.get(`${ROOT_URL}search?keywords=${keywords}${API_KEY}`)
	    .then((response) => {
		this.setState({quarks: response.data});
	    });
    }

    renderQuarks() {
	var first = this.state.quarks[0];
	return _.map(this.state.quarks, quark => {
	    return (
		<div key={quark.id}>
                    {(() => {
                        if (quark.id != first.id)
                        return <hr />;
                    })()}
                    <QuarkInSearch quark_in_search={quark} />
		</div>
	    );
	});
    }

    render () {
	if (this.state.quarks.length == 0) {
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

export default connect(state => state)(SearchResults);

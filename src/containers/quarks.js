import axios from 'axios';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import QuarkInList from '../components/quark_in_list';

import { API_HOST } from '../statics';

class QuarkList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quarks: [],
        };
	this.fetchQuarks();
    }

    fetchQuarks () {
	const ROOT_URL = 'http://' + API_HOST + '/';
	const API_KEY = '?key=euonymus';

	axios.get(`${ROOT_URL}quarks${API_KEY}`)
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
                    <QuarkInList quark_in_list={quark} />
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

export default connect(state => state)(QuarkList);


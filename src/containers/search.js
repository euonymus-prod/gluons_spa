// Thanks to:  react-autosuggest
// https://github.com/moroshko/react-autosuggest
// general
import axios from 'axios'
import _ from 'lodash';
// react
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
// common util
import { API_HOST } from '../statics';

const ROOT_URL = 'http://' + API_HOST + '/';
const API_KEY = '?key=euonymus';


// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
   <div className="autocomplete-item">
      <img src={suggestion.image_path} />
      {suggestion.name}
   </div>
);

class Search extends Component {
    constructor(props) {
	super(props);

	// Autosuggest is a controlled component.
	// This means that you need to provide an input value
	// and an onChange handler that updates this value (see below).
	// Suggestions also need to be provided to the Autosuggest,
	// and they are initially empty because the Autosuggest is closed.
	this.state = {
	    value: '',
	    suggestions: []
	};
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event, { newValue }) => {
	this.setState({
	    value: newValue
	}, () => {
	    if (this.state.value && this.state.value.length > 1) {
		if (this.state.value.length % 2 === 0) {
		    this.debouncedGetInfo();
		}
	    } else if (!this.state.value) {
	    }
	});
    };

    debouncedGetInfo = _.debounce(() => {
	this.getInfo(this.state.value);
    }, 300);

    getInfo = () => {
	axios.get(`${ROOT_URL}search${API_KEY}&keywords=${this.state.value}&limit=7`)
	    .then(({ data }) => {
		this.setState({
		    suggestions: data
		})
	    })
    }

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
	// Usually, this method fetch the suggestions data. But this case, class fetches right after api call.
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
	this.setState({
	    suggestions: []
	});
    };

    handleSubmit(event) {
	event.preventDefault();
	this.props.history.push(`/subjects/search/${this.state.value}`);
    };

    render() {
	const { value, suggestions } = this.state;

	// Autosuggest will pass through all these props to the input.
	const inputProps = {
	    placeholder: '人名、組織名、商品名、ブランド名などで検索',
            className: "form-control",
	    name:'keywords',
	    value,
	    onChange: this.handleInputChange
	};

	return (
           <form method="get" acceptCharset="utf-8" className="search_top text-center" onSubmit={this.handleSubmit}>
		{/*
               <div style={{display:'none'}}>
                  <input type="hidden" name="_method" value="POST"/>
               </div>
		 */}
              <div className="form-group center-block input-container-top">
                 <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                 />
              </div>
              <button className="btn btn-primary" type="submit">Gluons Search</button>
           </form>
	);
    }
}
export default withRouter(Search);

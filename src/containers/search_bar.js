// Thanks to:  react-autosuggest
// https://github.com/moroshko/react-autosuggest

// general
import axios from 'axios'
import _ from 'lodash';
// react
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Autosuggest from 'react-autosuggest';
// redux
import { connect } from 'react-redux';
// component
// action
import { changeSearchKeyword } from '../actions/quark';
// common util
import { API_URI } from '../statics';

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

class SearchBar extends Component {
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
	axios.get(`${API_URI}/quarks/search?keywords=${this.state.value}&limit=7`)

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
	this.props.changeSearchKeyword(this.state.value);
    };

    render() {
	const { value, suggestions } = this.state;

	// Autosuggest will pass through all these props to the input.
	const inputProps = {
	    placeholder: 'Search',
            className: "form-control",
	    name:'keywords',
	    value,
	    onChange: this.handleInputChange
	};

	return (
        <form method="get" acceptCharset="utf-8" className="navbar-form navbar-left" role="search" onSubmit={this.handleSubmit}>
		{/*
               <div style={{display:'none'}}>
                  <input type="hidden" name="_method" value="POST"/>
               </div>
		 */}
              <div className="input-group">
                 <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                 />
                 <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Go</button>
                 </span>
              </div>
           </form>
	);
    }
}
// export default withRouter(SearchBar);
export default connect(state => state, { changeSearchKeyword })(withRouter(SearchBar));


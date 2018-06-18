// Thanks to:  react-autosuggest
// https://github.com/moroshko/react-autosuggest
import axios from 'axios'

import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

const { API_KEY } = 'euonymus'
const API_URL = 'http://ja.localhost:8765/search'

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class Search extends Component {
    constructor() {
	super();

	// Autosuggest is a controlled component.
	// This means that you need to provide an input value
	// and an onChange handler that updates this value (see below).
	// Suggestions also need to be provided to the Autosuggest,
	// and they are initially empty because the Autosuggest is closed.
	this.state = {
	    value: '',
	    suggestions: []
	};
    }

    handleInputChange = (event, { newValue }) => {
	this.setState({
	    value: newValue
	});
    };

    getInfo = () => {
	axios.get(`${API_URL}?api_key=${API_KEY}&keywords=${this.state.value}&limit=7`)
	    .then(({ data }) => {
		this.setState({
		    suggestions: data
		})
	    })
    }

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
	this.getInfo(this.state.value);
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
	this.setState({
	    suggestions: []
	});
    };

    render() {
	const { value, suggestions } = this.state;

	// Autosuggest will pass through all these props to the input.
	const inputProps = {
	    placeholder: '人名、組織名、商品名、ブランド名などで検索',
            className: "form-control",
	    value,
	    onChange: this.handleInputChange
	};

	return (
           <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
           />
	);
    }
}
export default Search;

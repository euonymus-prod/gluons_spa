// react
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// redux
import { connect } from 'react-redux';

class SearchBar extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    value: '',
	};
	this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
	event.preventDefault();
	this.props.history.push(`/subjects/search/${this.state.value}`);
    };

    onInputChange(value) {
        this.setState({value});
    }

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
              <div className="input-group">
		<input
                     value = {this.state.value}
                     onChange = {event => this.onInputChange(event.target.value)}
	             placeholder="Search" className="form-control" name="keywords" />
                 <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Go</button>
                 </span>
              </div>
           </form>
	);
    }
}
export default withRouter(SearchBar);

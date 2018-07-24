// react
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
// common util
import { API_URI } from '../statics';

class Search extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    value: ''
	}
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
	return (
           <form method="get" acceptCharset="utf-8" className="search_top text-center" onSubmit={this.handleSubmit}>
              <div className="form-group center-block input-container-top">
		<input
                     value = {this.state.value}
                     onChange = {event => this.onInputChange(event.target.value)}
	             placeholder="人名、組織名、商品名、ブランド名などで検索" className="form-control" name="keywords" />
              </div>
              <button className="btn btn-primary" type="submit">Gluons Search</button>
           </form>
	);
    }
}
export default withRouter(Search);

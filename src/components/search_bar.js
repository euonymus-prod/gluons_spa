import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { value: '' };
    }

    render () {
	return (
           <div className="input text">
              <input
                 type="text"
                 name="keywords"
                 placeholder="人名、組織名、商品名、ブランド名などで検索"
                 className="form-control" id="keywords"
                 value={this.state.value}
                 onChange={event => this.onInputChange(event.target.value)}
		/>
           </div>
	)
    }
    onInputChange(value) {
	console.log(value);
	this.setState({value});
	this.props.onChange(value)
    }
}

export default SearchBar;

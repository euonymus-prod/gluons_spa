import React, { Component } from 'react'

class Suggestions extends Component {

    onLiClick = (e) => {
	console.log(e.target.innerText);
    }

    options() {
        return this.props.results.map(r => {
            return (
               <li key={r.id} onClick={this.onLiClick} >
                  {r.name}
               </li>
            );
        });
    }

    render() {
	return (
	  <ul>{this.options()}</ul>
	);
    }
}
export default Suggestions

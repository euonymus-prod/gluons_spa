// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';


class TopPickupDetail extends Component {
    render () {
	let secondpath = '';
	// if (this.props.pickup.type == 'passive') {
	//     secondpath = '/passive';
	// }
	return (
           <div className="pickup-link">
                <Link to={`/subjects/relations/${this.props.pickup.name}${secondpath}`} >
                   <img src={this.props.pickup.image_path} alt={this.props.pickup.name}/>
                </Link>
           </div>
	)
    }
}
export default connect(state => state)(TopPickupDetail);

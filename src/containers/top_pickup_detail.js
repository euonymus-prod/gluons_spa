import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class TopPickupDetail extends Component {
    render () {
	let secondpath = '';
	if (this.props.pickup.type == 'passive') {
	    secondpath = '/passive';
	}
	return (
           <div className="pickup-link">
                <a href={`/subjects/relations/${this.props.pickup.name}${secondpath}`} >
                   <img src={this.props.pickup.image_path} alt={this.props.pickup.name}/>
                </a>
           </div>
	)
    }
}
export default connect(state => state)(TopPickupDetail);

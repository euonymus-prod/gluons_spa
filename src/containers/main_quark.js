// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';

class MainQuark extends Component {

    render () {
        const { current_quark } = this.props;
        if (!current_quark) {
	    return <div>Loading...</div>;
        }

	return (
           <div className="col-md-3 card subject-main">
               <div className="subject-image">
                   <img src={current_quark.image_path} className="card-img-top" />
               </div>

               <div className="card-block">
                   <h1 className="card-title">{current_quark.name}</h1>
                   <p>{current_quark.period_str}</p>
                   <p>{current_quark.description}</p>
                   <p><Link to={`/relations/add/${current_quark.id}`} className="btn btn-primary">Add relation</Link></p>
               </div>
           </div>
	);
    }
}

function mapStateToProps({ current_quark }, ownProps) {
    return { current_quark };	
}
export default connect(mapStateToProps)(MainQuark);

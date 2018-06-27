import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Gluon from './gluon';

class GluonList extends Component {
    renderGluons() {
	var first = this.props.quark_property.gluons[0];
	return _.map(this.props.quark_property.gluons, gluon => {
	    if (!gluon) {
		return '';
	    }
	    return (
		<div key={gluon.id}>
                    {(() => {
                        if (gluon.id != first.id)
                        return <hr />;
                    })()}
                    <Gluon gluon = {gluon} />
		</div>
	    );
	});
    }

    render () {
	if (!this.props.quark_property.gluons || this.props.quark_property.gluons.length == 0) {
	    return '';
	}
	return (
           <div>
               <h2>{this.props.quark_property.caption_ja}</h2>
               <div className="related" >
                   <div className="well subject-relation white">
                       {this.renderGluons()}
                   </div>
               </div>
	   </div>
	)
    }
}

//export default connect(state => state)(GluonList);
// --------------------------------------------------------
function mapStateToProps({ current_quark }, ownProps) {
    return { current_quark };	
}
export default connect(mapStateToProps)(GluonList);
// --------------------------------------------------------

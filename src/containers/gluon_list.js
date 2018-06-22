import _ from 'lodash';
import axios from 'axios';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { API_HOST } from '../statics';

import Gluon from './gluon';

class GluonList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gluons: [],
        };
	// this.fetchGluons(props.quark_id, props.quark_property_id);
    }

    // fetchGluons (quark_id, quark_property_id) {
    // 	const ROOT_URL = 'http://' + API_HOST + '/';
    // 	const API_KEY = '?key=euonymus';

    // 	axios.get(`${ROOT_URL}gluons/by_quark_property/${quark_id}/${quark_property_id}${API_KEY}`)
    // 	    .then((response) => {
    // 		this.setState({gluons: response.data});
    // 	    });
    // }

    renderGluons() {
	var first = this.props.quark_property.gluons[0];
	return _.map(this.props.quark_property.gluons, gluon => {
	    if (!gluon) {
		return '';
	    }
	    return (
           <div key={gluon.id}>
               <h2>{this.props.quark_property.caption_ja}</h2>
               <div className="related" >
                   <div className="well subject-relation white">
                    {(() => {
                        if (gluon.id != first.id)
                        return <hr />;
                    })()}
                    <Gluon gluon = {gluon} />
                   </div>
               </div>
	   </div>
	    );
	});
    }

    render () {
	return (
           <div>
              {this.renderGluons()}
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

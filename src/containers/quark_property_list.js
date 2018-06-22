import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchQuarkProperties} from '../actions/quark';



// --------------------------------------------------------
import { fetchGluons } from '../actions/gluons';
// --------------------------------------------------------

import GluonList from './gluon_list';

class GluonTypeList extends Component {

    // --------------------------------------------------------
    componentWillMount() {
	const { current_quark } = this.props;
    	if (!current_quark.is_fetched) {
            this.props.fetchGluons(current_quark);
        }
    }
    // --------------------------------------------------------

    componentWillReceiveProps(nextProps) {
/*
	if (nextProps.quark) {
	    if (!this.props.quark || nextProps.quark.quark_type_id != this.props.quark.quark_type_id) {
		this.props.fetchQuarkProperties(nextProps.quark.quark_type_id);
	    }
        }
*/
    }

    renderQuarkProperties() {
	const { current_quark } = this.props;
        return _.map(current_quark.quark_properties, quark_property => {
	    if (!quark_property) {
		return '';
	    }
            return (
               <div key={quark_property.quark_property.id}>
                    <GluonList
                        quark_property={quark_property.quark_property}
		    />
               </div>
            );
        });
    }

    render () {
	const { current_quark } = this.props;
	if (!current_quark.is_gluon_fetched) {
	    return <div></div>;
	}

	return (
            <div>
		{this.renderQuarkProperties()}
{/*
                <div key="active">
                    <GluonList
		        quark_id={this.props.quark.id}
                        quark_property_id="active"
                        quark_property_caption={`${this.props.quark.name}とは`}/>
		</div>
                <div key="passive">
                    <GluonList
		        quark_id={this.props.quark.id}
                        quark_property_id="passive"
	                quark_property_caption={`${this.props.quark.name}に関する事項`}/>
		</div>
*/}
	    </div>
	)
    }
}

function mapStateToProps({ current_quark, gluons,      quark, quark_properties }, ownProps) {
    return { current_quark, gluons,      quark, quark_properties };	
}
// --------------------------------------------------------
export default connect(mapStateToProps, { fetchGluons, fetchQuarkProperties })(GluonTypeList);
// --------------------------------------------------------

import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchQuarkProperties} from '../actions/quark';

import GluonList from './gluon_list';

class GluonTypeList extends Component {

    componentWillReceiveProps(nextProps) {
	if (nextProps.quark) {
	    if (!this.props.quark || nextProps.quark.quark_type_id != this.props.quark.quark_type_id) {
		this.props.fetchQuarkProperties(nextProps.quark.quark_type_id);
	    }
        }
    }

    renderQuarkProperties() {
        return _.map(this.props.quark_properties, quark_property => {
            return (
               <div key={quark_property.id}>
                    <GluonList
		        quark_id={this.props.quark.id}
                        quark_property_id={quark_property.quark_property.id}
                        quark_property_caption={quark_property.quark_property.caption_ja}
		    />
               </div>
            );
        });
    }

    render () {
	const { quark } = this.props;
	if (!quark) {
	    return <div></div>;
	}

	return (
            <div>
		{this.renderQuarkProperties()}
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
	    </div>
	)
    }
}

function mapStateToProps({ quark, quark_properties }, ownProps) {
    return { quark, quark_properties };	
}
export default connect(mapStateToProps, { fetchQuarkProperties })(GluonTypeList);

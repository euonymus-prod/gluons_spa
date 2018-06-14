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
                   <h2>{quark_property.quark_property.caption_ja}</h2>
	           <div className="related" >
                    <GluonList
		        quark_id={this.props.quark.id}
                        quark_property_id={quark_property.quark_property.id} />
                   </div>
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

               <div>
                   <h2>{this.props.quark.name}とは</h2>
	           <div className="related" >
                    <GluonList
		        quark_id={this.props.quark.id}
                        quark_property_id="active" />
                   </div>
               </div>
               <div>
                   <h2>{this.props.quark.name}に関する事項</h2>
	           <div className="related" >
                    <GluonList
		        quark_id={this.props.quark.id}
                        quark_property_id="passive" />
                   </div>
               </div>
	    </div>
	)
    }
}
// export default connect(state => state)(GluonTypeList);
function mapStateToProps({ quark, quark_properties }, ownProps) {
    return { quark, quark_properties };	
}
export default connect(mapStateToProps, { fetchQuarkProperties })(GluonTypeList);

import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchQuarkProperties} from '../actions/quark';

import GluonList from './gluon_list';

class GluonTypeList extends Component {
    componentWillReceiveProps() {
	if (this.props.quark) {
            this.props.fetchQuarkProperties(this.props.quark.quark_type_id);
        }
    }

    renderQuarkProperties() {
	console.log(this.props);
        // return _.map(this.props.posts, post => {
        //     return (
        //         <GluonList />
        //         <li className="list-group-item" key={post.id}>
        //             <Link to={`/posts/${post.id}`}>
        //                 {post.title}
        //             </Link>
        //         </li>
        //     );
        // });
    }

    render () {
	const { quark } = this.props;
	if (!quark) {
	    return <div></div>;
	}

	return (
            <div>
		{this.renderQuarkProperties()}
	    </div>
	)
    }
}
// export default connect(state => state)(GluonTypeList);
function mapStateToProps({ quark, quark_properties }, ownProps) {
    return { quark, quark_properties };	
}
export default connect(mapStateToProps, { fetchQuarkProperties })(GluonTypeList);

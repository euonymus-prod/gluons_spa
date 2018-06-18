import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Util from '../common';

class QuarkInSearch extends Component {
    render () {
	let util = new Util();
	return (
           <div className="subject-relation white">
              <div className="subject-relation-main">
                 <div className="media">
                    <div className="media-left subject-image">
                       <a href={`/subjects/relations/${this.props.quark_in_search.name}`}><img src={this.props.quark_in_search.image_path} width="100px" height="100px" alt=""/></a>
                    </div>
                    <div className="media-body">
                       <h4>
                          <a href={`/subjects/relations/${this.props.quark_in_search.name}`}>
                             {this.props.quark_in_search.name}
                          </a>
                       </h4>

                       {this.props.quark_in_search.description}
                       <p>{util.period2str(this.props.quark_in_search)}</p>
                    </div>
                 </div>
              </div>
           </div>
	)
    }
}
export default connect(state => state)(QuarkInSearch);

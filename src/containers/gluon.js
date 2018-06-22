import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SubGluonList from './sub_gluon_list';

import Util from '../common';

class Gluon extends Component {
    gluedQuark() {
	if (this.props.current_quark.id == this.props.gluon.active_id) {
	    return this.props.gluon.passive
	} else if (this.props.current_quark.id == this.props.gluon.passive_id) {
	    return this.props.gluon.active
	}
	return '';
    }

    relationText() {
	if (this.props.current_quark.id == this.props.gluon.active_id) {
            return (
               <h4 className="media-heading">
                  {this.props.gluon.active.name} は
                  <a href={`/subjects/relations/${this.gluedQuark().name}`}>{this.gluedQuark().name}</a> {this.props.gluon.relation} {this.props.gluon.suffix}
               </h4>
	    );
	} else if (this.props.current_quark.id == this.props.gluon.passive_id) {
            return (
               <h4 className="media-heading">
                   <a href={`/subjects/relations/${this.gluedQuark().name}`}>{this.gluedQuark().name}</a> は
                   {this.props.gluon.passive.name} {this.props.gluon.relation} {this.props.gluon.suffix}
               </h4>
	    );
	}
	return '';
    }

    render () {
console.log(this.props.gluon);
	let util = new Util();
	return (
            <div className="subject-relation white">
                <div className="subject-relation-main">
                    <div className="media">
                        <div className="media-left subject-image">
                            <a href={`/subjects/relations/${this.gluedQuark().name}`}><img src={this.gluedQuark().image_path} width="100px" height="100px" alt=""/></a>
                        </div>
                        <div className="media-body">
		            {this.relationText()}
                            <p>{util.period2str(this.props.gluon)}</p>
                        </div>
                    </div>
                </div>
{/*                <SubGluonList sub_quark={this.gluedQuark()}/>
*/}
            </div>
	)
    }
}
export default connect(state => state)(Gluon);

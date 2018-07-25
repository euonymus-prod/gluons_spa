// react
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
// component
import SubGluonList from './sub_gluon_list';
// action
import { deleteGluon, removeDeletedGluon } from '../actions/gluon';
import { execLogout } from '../actions/login';
// common util
import Util from '../utils/common';
import GluonUtil from '../utils/gluon';

let gluon_util = new GluonUtil();

class Gluon extends Component {
    componentWillReceiveProps(nextProps) {
        const { deleted_gluon, current_quark } = this.props;
	if (nextProps.deleted_gluon) {

	    if (this.props.gluon.id == nextProps.deleted_gluon.gluon_id) {
		if (!nextProps.deleted_gluon.message) {
		    this.props.execLogout();
		    alert('Please login again');
		} else {
		    alert(nextProps.deleted_gluon.message);
		}
		this.props.removeDeletedGluon();

		if (nextProps.deleted_gluon.status == 1) {
		    this.props.history.push('/subjects/relations/' + current_quark.name);
		}
	    }
	}
    }

    gluedQuark() {
	let res = gluon_util.gluedQuark(this.props.current_quark, this.props.gluon);
	if (!res) {
	    return '';
	}
	return res;
    }

    onDeleteClick = (event) => {
	if (confirm('Are you sure you want to delete?')) {
	    // let doc_name = 'post_delete_gluon_' + gluon_id;
	    // document.doc_name.submit();
	    this.props.deleteGluon(this.props.gluon.id)
	}
	return false;
    }

    renderGluonEdits(gluon) {
	return (
	   <span>
              <Link to={`/relations/edit/${gluon.id}`} className="glyphicon glyphicon glyphicon-pencil"></Link>
{/*
              <form name={`post_delete_gluon_${gluon.id}`} style={{display:"none"}} method="post" action={`/relations/delete/${gluon.id}`}>
                 <input type="hidden" name="_method" value="POST"/>
              </form>
*/}
              <a href="javascript:void(0)" className="glyphicon glyphicon-remove-sign" onClick={this.onDeleteClick}></a>
           </span>
	)
    }

    relationText() {
	if (this.props.current_quark.id == this.props.gluon.active_id) {
            return (
               <h4 className="media-heading">
                  {this.props.gluon.active.name} は
                  <Link to={`/subjects/relations/${this.gluedQuark().name}`}>{this.gluedQuark().name}</Link> {this.props.gluon.relation} {this.props.gluon.suffix}
                  {this.renderGluonEdits(this.props.gluon)}
               </h4>
	    );
	} else if (this.props.current_quark.id == this.props.gluon.passive_id) {
            return (
               <h4 className="media-heading">
                  <Link to={`/subjects/relations/${this.gluedQuark().name}`}>{this.gluedQuark().name}</Link> は
                  {this.props.gluon.passive.name} {this.props.gluon.relation} {this.props.gluon.suffix}
                  {this.renderGluonEdits(this.props.gluon)}
               </h4>
	    );
	}
	return '';
    }

    render () {
	let util = new Util();
	return (
            <div className="subject-relation white">
                <div className="subject-relation-main">
                    <div className="media">
                        <div className="media-left subject-image">
                            <Link to={`/subjects/relations/${this.gluedQuark().name}`}><img src={this.gluedQuark().image_path} width="100px" height="100px" alt=""/></Link>
                        </div>
                        <div className="media-body">
		            {this.relationText()}
                            <p>{util.period2str(this.props.gluon)}</p>
                        </div>
                    </div>
                </div>
                <SubGluonList sub_quark={this.gluedQuark()} privacy={this.props.privacy} />
            </div>
	)
    }
}
// export default connect(state => state)(Gluon);
export default withRouter(connect(state => state, { deleteGluon, removeDeletedGluon, execLogout })(Gluon));


/*
Thanks to redux-form
   https://redux-form.com/6.0.5/docs/gettingstarted.md/
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

// --------------------------------------------------------
import { Field, reduxForm } from 'redux-form';
import { fetchGluonTypes } from '../actions/gluon_types';
import { addGluon, removeAddedGluon } from '../actions/gluons';
import { execLogout } from '../actions/login';

import LoginUtil from '../utils/login';
// --------------------------------------------------------

const validate = values => {
  const errors = {}
  if (!values.gluon_type_id) {
    errors.gluon_type_id = 'Must choose Gluon Type'
  }
  if (!values.passive) {
    errors.passive = 'Required'
  } else if (values.passive.length > 255) {
    errors.name = 'Must be less than 255'
  }
  if (!values.relation) {
    errors.relation = 'Required'
  } else if (values.relation.length > 255) {
    errors.name = 'Must be less than 255'
  }
  if (values.suffix && values.suffix.length > 255) {
    errors.suffix = 'Must be less than 255'
  }
  if (values.start_accuracy && !['year', 'month'].includes(values.start_accuracy)) {
    errors.start_accuracy = 'Must be either of "year" or "month"'
  }
  if (values.end_accuracy && !['year', 'month'].includes(values.end_accuracy)) {
    errors.end_accuracy = 'Must be either of "year" or "month"'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="input text">
     <label htmlFor={input.id}>{label}</label>
     {/*  required="required" maxLength="255" id="name" */ }
     <input {...input} placeholder={label} type={type} className="form-control" />
     {touched && (error && <span className="validation-error">{error}</span>)}
  </div>
)

class AddGluon extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { gluon_types } = this.props;
        if (!gluon_types) {
            this.props.fetchGluonTypes();
        }
    }
    // --------------------------------------------------------

    componentWillReceiveProps(nextProps) {
        const { logged_in_user, added_gluon } = this.props;
        // initialize
	const login_util = new LoginUtil();
	if (!login_util.isLoggedIn(nextProps.logged_in_user)) {
	    this.props.history.push('/');
	}

	if (nextProps.added_gluon) {
	    if (!nextProps.added_gluon.message) {
		alert('Please login again');
		this.props.execLogout();
	    } else {
		alert(nextProps.added_gluon.message);
	    }

	    if (nextProps.added_gluon.status != 1) {
		this.props.removeAddedGluon();
	    } else if ( !added_gluon || (nextProps.added_gluon.id != added_gluon.id) ) {
		this.props.history.push('/subjects/relations/' + nextProps.added_gluon.result.active_id);
	    }
	}
    }

    onSubmit = (values) => {
	if (!values.is_momentary) {
	    values.is_momentary = 0;
	}
	if (!values.is_exclusive) {
	    values.is_exclusive = 0;
	}
	this.props.addGluon(values);
    }

    renderSelect = ({ input, label, type, meta: { touched, error } }) => (
  <div className="input select">
     <label htmlFor="gluon-type-id">Gluon Type</label>
     <Field name="gluon_type_id" id="gluon-type-id" component="select">
        {this.renderGluonTypes()}
     </Field>
     {touched && (error && <span className="validation-error"><br />{error}</span>)}
  </div>
    )

    renderGluonTypes() {
	const { gluon_types } = this.props;
	if (!gluon_types) {
	    return '';
	}
	return Object.keys(gluon_types).map((value, index) => {
	    return (
               <option value={value} key={value}>{gluon_types[value]}</option>
	    );
	});
    }

 render () {
  const { handleSubmit } = this.props;
  return (
   <div>
      <Navbar />

      <div className="container">
        <div className="">
           <h2>Adding new gluon on 柳瀬唯夫</h2>
        </div>

        <div>
           <form onSubmit={handleSubmit(this.onSubmit)} acceptCharset="utf-8">
              <fieldset>
                 <legend>Add New Gluon</legend>
                 <div className="form-group">

                    <Field name="gluon_type_id" component={this.renderSelect}
                           type="select" id="gluon-type-id" label="Gluon Type" />
                    <br />
                    <Field name="passive" component={renderField} type="text" id="passive" label="Passive" />
                    <Field name="relation" component={renderField} type="text" id="relation" label="Relation" />
                    <Field name="suffix" component={renderField} type="text" id="suffix" label="Suffix" />

                    <div className="input text">
                       <label htmlFor="url">Start</label>
                       <Field type='date' component="input" className="form-control date" name="start" />
                       <label htmlFor="url">End</label>
                       <Field type='date' component="input" className="form-control date" name="end" />
                    </div>

                    <Field name="start_accuracy" component={renderField} type="text" id="start-accuracy" label="Start Accuracy" />
                    <Field name="end_accuracy" component={renderField} type="text" id="end-accuracy" label="End Accuracy" />

                    <div className="input checkbox">
                       <label htmlFor="is-momentary">
                          <Field name="is_momentary" id="is-momentary" component="input" type="checkbox" />
                          Is Momentary
                       </label>
                    </div>
                    <div className="input checkbox">
                       <label htmlFor="is-exclusive">
                          <Field name="is_exclusive" id="is-exclusive" component="input" type="checkbox" />
                          Is Exclusive
                       </label>
                    </div>

                 </div>
              </fieldset>
              <button className="btn btn-primary" type="submit">Submit</button>
           </form>
        </div>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
// --------------------------------------------------------
export default  reduxForm({
  form: 'add_gluon', // a unique name for this form
　initialValues: {'gluon_type_id':'1', 'is_exclusive': true},
  validate,
})(withRouter(connect(state => state, { fetchGluonTypes, addGluon, removeAddedGluon, execLogout })(AddGluon)));
// --------------------------------------------------------

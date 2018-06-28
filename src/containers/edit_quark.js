/*
Thanks to redux-form
   https://redux-form.com/6.0.5/docs/gettingstarted.md/
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from "react-router-dom";

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

// --------------------------------------------------------
import { Field, reduxForm } from 'redux-form';
import { fetchQuarkTypes } from '../actions/quark_types';
import { execEditQuark, removeEditedQuark } from '../actions/quark';
import { execLogout } from '../actions/login';

import Util from '../utils/common';
// --------------------------------------------------------

const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length > 255) {
    errors.name = 'Must be less than 255'
  }
  if (values.description && values.description.length > 255) {
    errors.description = 'Must be less than 255'
  }
  if (values.start_accuracy && !['year', 'month'].includes(values.start_accuracy)) {
    errors.start_accuracy = 'Must be either of "year" or "month"'
  }
  if (values.end_accuracy && !['year', 'month'].includes(values.end_accuracy)) {
    errors.end_accuracy = 'Must be either of "year" or "month"'
  }
  if (values.url && values.url.length > 255) {
    errors.url = 'Must be less than 255'
  }
  if (values.affiliate && values.affiliate.length > 255) {
    errors.affiliate = 'Must be less than 255'
  }
  if (!values.quark_type_id) {
    errors.quark_type_id = 'Must choose Quark Type'
  }
  return errors
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className="input text">
     <label htmlFor={input.id}>{label}</label>
     {/*  required="required" maxLength="255" id="name" */ }
     <input {...input} placeholder={label} type={type} className="form-control" />
     {touched && (error && <span className="validation-error">{error}</span>) }
  </div>
)

class EditQuark extends Component {
    // --------------------------------------------------------
    componentWillMount() {
	const { quark_types } = this.props;
        if (!quark_types) {
            this.props.fetchQuarkTypes();
        }
    }
    // --------------------------------------------------------

    componentWillReceiveProps(nextProps) {
        const { logged_in_user, edited_quark } = this.props;
        // initialize
	if (!nextProps.logged_in_user) {
	    this.props.history.push('/');
	}

	if (nextProps.edited_quark) {
	    if (!nextProps.edited_quark.message) {
		alert('Please login again');
		this.props.execLogout();
	    } else {
		alert(nextProps.edited_quark.message);
	    }

	    if (nextProps.edited_quark.status != 1) {
		this.props.removeEditedQuark();
	    } else if ( !edited_quark || (nextProps.edited_quark.id != edited_quark.id) ) {
		this.props.history.push('/subjects/relations/' + nextProps.edited_quark.result.name);
	    }
	}
    }

    onSubmit = (values) => {
	if (!values.image_path && values.auto_fill) {
	    let util = new Util();
	    let default_image_name = util.fPascalToSnake(this.props.quark_types[values.quark_type_id]) + '.png';
	    values.image_path = '/img/' + default_image_name
	}
	if (!values.is_momentary) {
	    values.is_momentary = 0;
	}
	if (!values.is_private) {
	    values.is_private = 0;
	}
	if (!values.is_exclusive) {
	    values.is_exclusive = 0;
	}
	this.props.execEditQuark(values);
    }

    renderSelect = ({ input, label, type, meta: { touched, error } }) => (
  <div className="input select">
     <label htmlFor={input.id}>{label}</label>
     <Field name="quark_type_id" id="quark-type-id" component="select">
        {this.renderQuarkTypes()}
     </Field>
     {touched && (error && <span className="validation-error"><br />{error}</span>)}
  </div>
    )

    renderQuarkTypes() {
	const { quark_types } = this.props;
	return Object.keys(quark_types).map((value, index) => {
	    return (
               <option value={value} key={value}>{quark_types[value]}</option>
	    );
	});
    }

 render () {
  const { handleSubmit } = this.props;
  return (
   <div>
      <Navbar />

      <div className="container">

        <form onSubmit={handleSubmit(this.onSubmit)} acceptCharset="utf-8">

           <fieldset>
              <legend>Edit New Quark</legend>
              <div className="form-group">
                 <Field name="name" component={renderField} type="text" id="name" label="Name" />
                 <Field name="image_path" component={renderField} type="text" id="image_path" label="Image Path" />
                 <div className="input checkbox">
                    <label htmlFor="auto-fill">
                       {/*  value="1" checked="checked" onChange={event => {}} */}
                       <Field name="auto_fill" id="auto-fill" component="input" type="checkbox" />
                       Auto Fill
                    </label>
                 </div>
              </div>
              <div className="form-group">
                 <h4>optional</h4>
                 <Field name="description" component={renderField} type="text" id="description" label="Description" />
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
                 <Field name="url" component={renderField} type="text" id="url" label="URL" />
                 <Field name="affiliate" component={renderField} type="text" id="affiliate" label="Affiliate" />
                 <br />

                 <Field name="quark_type_id" component={this.renderSelect} type="select" id="quark-type-id" label="Quark Type" />

                 <div className="input checkbox">
                    <input type="hidden" name="is_private" value="0"/>
                    <label htmlFor="is-private">
                       <Field name="is_private" id="is-private" component="input" type="checkbox" />
                       Is Private
                    </label>
                 </div>
                 <div className="input checkbox">
                    <input type="hidden" name="is_exclusive" value="0"/>
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

      <GlobalFooter />
   </div>
  )
 }
}
// --------------------------------------------------------
export default  reduxForm({
  form: 'edit_quark', // a unique name for this form
　initialValues: {'auto_fill': true, 'quark_type_id':'1', 'is_exclusive': true},
  validate,
})(withRouter(connect(state => state, { fetchQuarkTypes, execEditQuark, removeEditedQuark, execLogout })(EditQuark)));
// --------------------------------------------------------
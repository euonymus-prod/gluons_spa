/*
Thanks to redux-form
   https://redux-form.com/6.0.5/docs/gettingstarted.md/
*/
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

// --------------------------------------------------------
import { Field, reduxForm } from 'redux-form';
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
  return errors
}

const warn = values => {
  const warnings = {}
  if (values.name < 19) {
    warnings.name = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="input text">
     <label htmlFor={input.id}>{label}</label>
     {/*  required="required" maxLength="255" id="name" */ }
     <input {...input} placeholder={label} type={type} className="form-control" />
     {touched && ((error && <span className="validation-error">{error}</span>) || (warning && <span className="validation-warning">{warning}</span>))}
  </div>
)

class AddQuark extends Component {
    onSubmit = (values) => {
	console.log(values);


    }

 render () {
  const { handleSubmit } = this.props;
  return (
   <div>
      <Navbar />

      <div className="container">

        <form onSubmit={handleSubmit(this.onSubmit)} acceptCharset="utf-8">

           <fieldset>
              <legend>Add New Quark</legend>
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
                 <div className="input select">
                    <label htmlFor="quark-type-id">Quark Type</label>

                    <Field name="quark_type_id" id="quark-type-id" component="select">
                       <option />
                       <option value="1">Thing</option>
                       <option value="2">Person</option>
                    </Field>

                 </div>

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
//export default connect(state => state)(AddQuark);
export default reduxForm({
  form: 'add_quark', // a unique name for this form
  validate,
  warn
})(AddQuark);

/*
                 <div className="input select">
                    <label htmlFor="quark-type-id">Quark Type</label>
                    <select name="quark_type_id" id="quark-type-id">
                       <option value="1">Thing</option>
                       <option value="2">Person</option>
                       <option value="3">CreativeWork</option><option value="4">WebSite</option><option value="5">Book</option><option value="6">PublicationIssue</option><option value="7">Article</option><option value="8">SoftwareApplication</option><option value="9">Game</option><option value="10">Movie</option><option value="11">Painting</option><option value="12">Photograph</option><option value="13">MusicPlaylist</option><option value="14">MusicAlbum</option><option value="15">MusicRecording</option><option value="16">CreativeWorkSeries</option><option value="17">Event</option><option value="18">Intangible</option><option value="19">Brand</option><option value="20">BroadcastChannel</option><option value="21">TelevisionChannel</option><option value="22">Organization</option><option value="23">Corporation</option><option value="24">EducationalOrganization</option><option value="25">CollegeOrUniversity</option><option value="26">ElementarySchool</option><option value="27">HighSchool</option><option value="28">MiddleSchool</option><option value="29">Preschool</option><option value="30">School</option><option value="31">GovernmentOrganization</option><option value="32">LocalBusiness</option><option value="33">Store</option><option value="34">MedicalOrganization</option><option value="35">Hospital</option><option value="36">NGO</option><option value="37">PerformingGroup</option><option value="38">MusicGroup</option><option value="39">SportsOrganization</option><option value="40">SportsTeam</option><option value="41">Place</option><option value="42">Accommodation</option><option value="43">AdministrativeArea</option><option value="44">City</option><option value="45">Country</option><option value="46">State</option><option value="47">CivicStructure</option><option value="48">Landform</option><option value="49">LandmarksOrHistoricalBuildings</option><option value="50">Residence</option><option value="51">TouristAttrcaction</option><option value="52">Product</option>
                    </select>
                 </div>


*/

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


class AddQuark extends Component {
 render () {
  const { handleSubmit } = this.props;
  return (
   <div>
      <Navbar />

      <div className="container">

        <form onSubmit={handleSubmit} acceptCharset="utf-8">
           <fieldset>
              <legend>Add New Quark</legend>
              <div className="form-group">
                 <div className="input text required">
                    <label htmlFor="name">Name</label>
                    {/*  required="required" maxLength="255" id="name" */ }
                    <Field name="name" component="input" type="text" className="form-control" />
                 </div>
                 <div className="input text">
                    <label htmlFor="image-path">Image Path</label>
                    {/*  maxLength="255" id="image-path" */ }
                    <Field name="image_path" component="input" type="text" className="form-control" />
                 </div>
                 <div className="input checkbox">
                    <label htmlFor="auto-fill">
                       {/*  value="1" checked="checked" onChange={event => {}} */}
                       <Field name="auto_fill" id="auto-fill" component="input" type="checkbox" />
                       Auto Fill
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
  form: 'add_quark' // a unique name for this form
})(AddQuark);

/*

              <div className="form-group">

                 <h4>optional</h4>
                 <div className="input text">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" className="form-control" maxLength="255" id="description"/>
                 </div>
                 <div className="input text">
                    <label htmlFor="url">Start</label>
                    <input type='date' className="form-control date" name="start" />
                    <label htmlFor="url">End</label>
                    <input type='date' className="form-control date" name="end" />
                 </div>



                 <div className="input text">
                    <label htmlFor="start-accuracy">Start Accuracy</label>
                    <input type="text" name="start_accuracy" className="form-control" maxLength="10" id="start-accuracy"/>
                 </div>
                 <div className="input text">
                    <label htmlFor="end-accuracy">End Accuracy</label>
                    <input type="text" name="end_accuracy" className="form-control" maxLength="10" id="end-accuracy"/>
                 </div>
                 <div className="input checkbox">
                    <input type="hidden" name="is_momentary" value="0"/>
                    <label htmlFor="is-momentary">
                       <input type="checkbox" name="is_momentary" value="1" id="is-momentary" />Is Momentary
                    </label>
                 </div>
                 <div className="input text">
                    <label htmlFor="url">Url</label>
                    <input type="text" name="url" className="form-control" maxLength="255" id="url"/>
                 </div>
                 <div className="input text">
                    <label htmlFor="affiliate">Affiliate</label>
                    <input type="text" name="affiliate" className="form-control" maxLength="255" id="affiliate"/>
                 </div>
                 <br />
                 <div className="input select">
                    <label htmlFor="quark-type-id">Quark Type</label>
                    <select name="quark_type_id" id="quark-type-id">
                       <option value="1">Thing</option>
                       <option value="2">Person</option>
                       <option value="3">CreativeWork</option><option value="4">WebSite</option><option value="5">Book</option><option value="6">PublicationIssue</option><option value="7">Article</option><option value="8">SoftwareApplication</option><option value="9">Game</option><option value="10">Movie</option><option value="11">Painting</option><option value="12">Photograph</option><option value="13">MusicPlaylist</option><option value="14">MusicAlbum</option><option value="15">MusicRecording</option><option value="16">CreativeWorkSeries</option><option value="17">Event</option><option value="18">Intangible</option><option value="19">Brand</option><option value="20">BroadcastChannel</option><option value="21">TelevisionChannel</option><option value="22">Organization</option><option value="23">Corporation</option><option value="24">EducationalOrganization</option><option value="25">CollegeOrUniversity</option><option value="26">ElementarySchool</option><option value="27">HighSchool</option><option value="28">MiddleSchool</option><option value="29">Preschool</option><option value="30">School</option><option value="31">GovernmentOrganization</option><option value="32">LocalBusiness</option><option value="33">Store</option><option value="34">MedicalOrganization</option><option value="35">Hospital</option><option value="36">NGO</option><option value="37">PerformingGroup</option><option value="38">MusicGroup</option><option value="39">SportsOrganization</option><option value="40">SportsTeam</option><option value="41">Place</option><option value="42">Accommodation</option><option value="43">AdministrativeArea</option><option value="44">City</option><option value="45">Country</option><option value="46">State</option><option value="47">CivicStructure</option><option value="48">Landform</option><option value="49">LandmarksOrHistoricalBuildings</option><option value="50">Residence</option><option value="51">TouristAttrcaction</option><option value="52">Product</option>
                    </select>
                 </div>


                 <div className="input checkbox">
                    <input type="hidden" name="is_private" value="0"/>
                    <label htmlFor="is-private">
                       <input type="checkbox" name="is_private" value="1" id="is-private" onChange={event => {}} />
                       Is Private
                    </label>
                 </div>
                 <div className="input checkbox">
                    <input type="hidden" name="is_exclusive" value="0"/>
                    <label htmlFor="is-exclusive">
                       <input type="checkbox" name="is_exclusive" value="1" checked="checked" id="is-exclusive"  onChange={event => {}}/>
                       Is Exclusive
                    </label>
                 </div>
              </div>
*/

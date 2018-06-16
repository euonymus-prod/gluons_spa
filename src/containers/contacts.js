import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';

class Contacts extends Component {
 render () {
  return (
   <div>
      <Navbar withSearchBar='1' />

      <div className="container">
         <h1>contact us</h1>
         <div className="jumbotron contact-us">
            <img src="/img/logo.gif" />
            <p>Leverage your knowledge by seeking relations among things, people, ETC. If you’d like to know more about how we can help you, put down anything here.</p>

            <form method="post" acceptCharset="utf-8" className="search_top" action="/contacts">
               <div style={{display:'none'}}><input type="hidden" name="_method" value="POST"/></div>
               <div className="form-group center-block input-container-top">
                  <div className="input text required">
                     <label htmlFor="name">Name</label>
                     <input type="text" name="name" className="form-control" required="required" id="name"/>
                  </div>
                  <div className="input text required">
                     <label htmlFor="organization">Organization</label>
                     <input type="text" name="organization" className="form-control" required="required" id="organization"/>
                  </div>
                  <div className="input text required">
                     <label htmlFor="department">Department</label>
                     <input type="text" name="department" className="form-control" required="required" id="department"/>
                  </div>
                  <div className="input email required">
                     <label htmlFor="email">Email</label>
                     <input type="email" name="email" className="form-control" required="required" id="email"/>
                  </div>
                  <br />
                  <select name="topic" required="required">
                     <option value="">(Select one topic)</option>
                     <option value="About Service">About Service</option>
                     <option value="Business relationship">Business relationship</option>
                     <option value="Media coverage">Media coverage</option>
                     <option value="Other">Other</option>
                  </select>
                  <div className="input textarea required">
                     <label htmlFor="body">Body</label>
                     <textarea name="body" className="form-control" required="required" id="body" rows="5"></textarea>
                  </div>
               </div>
               <button className="btn btn-primary" type="submit">Contact us</button>
            </form>
         </div>
         <p>'gluons' is a database of relations among anything in the universe.</p>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
export default connect(state => state)(Contacts);

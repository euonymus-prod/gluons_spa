import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import MainQuark from './main_quark';
import QuarkPropertyList from './quark_property_list';

class Detail extends Component {
 render () {
  return (
   <div>
      <Navbar />

      <div className="container">
         <div className="row">

            <MainQuark quark_name={this.props.match.params.quark_name}/>

            <div className="col-md-9 subject-relation-list">
               <ul className="nav nav-pills">
                  <li role="presentation" className="active">
                     <a href="/subjects/relations/%E3%83%89%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97/active">Active</a>      
                  </li>
                  <li role="presentation">
                     <a href="/subjects/relations/%E3%83%89%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97/passive">Passive</a>
                  </li>
                  <li role="presentation">
                     <a href="/subjects/relations/%E3%83%89%E3%83%8A%E3%83%AB%E3%83%89%E3%83%BB%E3%83%88%E3%83%A9%E3%83%B3%E3%83%97/none">None</a>
                  </li>
               </ul>

               <QuarkPropertyList />
            </div>

         </div>
      </div>

      <GlobalFooter />
   </div>
  )
 }
}
export default connect(state => state)(Detail);


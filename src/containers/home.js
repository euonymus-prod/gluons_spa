import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Search from './search';
import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import TopPickups from './top_pickups';

class Home extends Component {
    render () {
	return (
   <div>
      <Navbar />

      <div className="container">
         <div className="logo-top">
             <img src="/img/logo.gif" />
         </div>

         <div className="home">
            <p className="text-center">気になる人、物、会社の隠れた関係を見つけよう</p>
            <Search />
            <TopPickups />
         </div>

      </div>

      <GlobalFooter />
   </div>
	)
    }
}
export default connect(state => state)(Home);

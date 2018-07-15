// react
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// redux
import { connect } from 'react-redux';
// component
import Search from './search';
import TopPickups from './top_pickups';


class Home extends Component {
    render () {
	return (
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
	)
    }
}
export default connect(state => state)(Home);

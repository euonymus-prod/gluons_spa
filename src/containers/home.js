import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSuggest} from '../actions/search';
import {Link} from 'react-router-dom';

import SearchBar from '../components/search_bar';
import GlobalFooter from '../components/global_footer';
import Navbar from './navbar';
import TopPickups from './top_pickups';

class Home extends Component {
    _onChange = (value) => {
	this.props.dispatch(fetchSuggest(value))
    }

    render () {
	const {keyword} = this.props.suggest;
	return (
   <div>
      <Navbar />

      <div className="container">
         <div className="logo-top">
             <img src="/img/logo.gif" />
         </div>

         <div className="home">
            <p className="text-center">気になる人、物、会社の隠れた関係を見つけよう</p>
            <form method="get" acceptCharset="utf-8" className="search_top text-center" action="/subjects/search">
               <div style={{display:'none'}}>
                  <input type="hidden" name="_method" value="POST"/>
               </div>
               <div className="form-group center-block input-container-top">
                  <SearchBar onChange={this._onChange} />
               </div>
               <button className="btn btn-primary" type="submit">Gluons Search</button>
            </form>

            <TopPickups />

         </div>

      </div>

      <GlobalFooter />
   </div>
	)
    }
}
export default connect(state => state)(Home);

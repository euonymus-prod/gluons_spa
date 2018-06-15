import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';

import Home from './containers/home';
import Contacts from './containers/contacts';
import Login from './containers/login';
import Signup from './containers/signup';
import Detail from './containers/detail';

import Terms from './components/terms';
import Privacy from './components/privacy';

import App from './containers/app';
import About from './containers/about';

export default () => {
 return (
   <BrowserRouter>
      <div>
         <ScrollMemory />
         <Switch>
            {/* containers  */}
            <Route exact path='/' component={Home}/>
            <Route path='/contacts' component={Contacts}/>

            {/* TODO: need to build  */}
            <Route path='/subjects/relations/:quark_name/:sub_gluon_side' component={Detail}/>
            <Route path='/subjects/relations/:quark_name' component={Detail}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>

            {/* conponents  */}
            <Route path='/terms' component={Terms}/>
            <Route path='/privacy' component={Privacy}/>

            <Route exact path='/app' component={App}/>
            <Route path='/about' component={About}/>
         </Switch>
      </div>
   </BrowserRouter>
 )
}

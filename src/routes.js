import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './containers/home';
import App from './containers/app';
import About from './containers/about';
export default () => {
 return (
   <BrowserRouter>
   <Switch>
   <Route exact path='/' component={Home}/>
   <Route exact path='/app' component={App}/>
   <Route path='/about' component={About}/>
   </Switch>
   </BrowserRouter>
 )
}

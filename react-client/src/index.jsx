//import main dependencies react + react-dom + jquery
//to work react
import React from 'react';
//to work react dom
import ReactDOM from 'react-dom';
//to work in ajax
import $ from 'jquery';
//and the router
import { Router, Route, IndexRoute, hashHistory } from "react-router";
//import each components
import List from './Rifaa/components/List.jsx';
import SignIn from './Jozaa/pages/SignIn.jsx';
import SignUp from './Jozaa/pages/SignUp.jsx';

//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    //undestand props
    const t='Welcome jozaa' 
    return (
      <div>
        <SignUp /*understand props*/ t1={t}></SignUp>
        <SignIn></SignIn>
      </div>)
  }
}

ReactDOM.render(<App2 />, document.getElementById('app1'));

/*
<Router history={hashHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
    <Route path="archives(/:article)" name="archives" component={Archives}></Route>
    <Route path="settings" name="settings" component={Settings}></Route>
  </Route>
</Router>

*/
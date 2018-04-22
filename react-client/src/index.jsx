//import main dependencies react + react-dom + jquery
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
//and the router
import { Router, Route, IndexRoute, hashHistory } from "react-router";
//import each components
import List from './Rifaa/components/List.jsx';
import User from './Jozaa/components/User.jsx';
import Password from './Jozaa/components/Password.jsx';
import Login from './Jozaa/pages/Login.jsx';

//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change
  render () { 
    return (
      <div>
        <Login></Login>
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
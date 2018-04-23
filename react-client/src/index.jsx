//import main dependencies react + react-dom + jquery
//to work react
import React from 'react';
//to work react dom
import ReactDOM from 'react-dom';
//to work in ajax
import $ from 'jquery';
//and the router
//import { Router, Route, IndexRoute, hashHistory } from "react-router";

//and the router
import {BrowserRouter as Router, Link, NavLink, Redirect, Prompt } from "react-router-dom";
import Route from "react-router-dom/Route"

//import each components
import List from './Rifaa/components/List.jsx';
import Login from './Jozaa/pages/Login.jsx';
import SignUp from './Jozaa/pages/SignUp.jsx';

//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    return (
      <Router>
        <div>
          <Route path="/login" exact strict component={Login}/>     
          <Route path="/signup" exact strict component={SignUp}/>
        </div>
      </Router> 
     
      )
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

for user/554
User({match})=> {match.params.username}
<Link to=''></Link>
<NavLink to='' activeStyle={} exact></NavLink>
<Redirect to''></Redirect>


{ the history history={hashHistory}?????}
 { the history ?????
      <div>
        <SignUp/>
        <Login/>
      </div>
      }




      <Router history={hashHistory}>
        <Route path="/login" exact strict component={Login}></Route>
        <Route path="/signup" exact strict component={SignUp}></Route>
      </Router>




      <Router >
        <div>
          <Route path="/login" exact strict component={Login}/>
          <Route path="/signup" exact strict component={SignUp}/>
        </div>
      </Router> 


*/
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
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt } from "react-router-dom";

//import each components
import List from './Rifaa/components/List.jsx';
import Home from './Jozaa/pages/Home.jsx';
import Login from './Jozaa/pages/Login.jsx';
import SignUp from './Jozaa/pages/SignUp.jsx';
//style for not active link
const notActive={
  backgroundColor: 'green',
  color: 'white',
  border: '2px solid',
};
//style for active link
const Active={
  padding:'5px',
  backgroundColor: 'orange',
  color: 'black',
  border: '2px solid',
};
//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    return (
      <Router>
        <div>
          <div style={{backgroundColor: 'blue'}}>
           <NavLink to='/' exact strict style={notActive} activeStyle={Active}>Home</NavLink>
           <NavLink to='/login' exact strict style={notActive} activeStyle={Active}>Login</NavLink>
           <NavLink to='/signup' exact strict style={notActive} activeStyle={Active}>Sign Up</NavLink>
          </div>
          <Route path="/" exact strict component={Home}/>     
          <Route path="/login" exact strict component={Login}/>     
          <Route path="/signup" exact strict component={SignUp}/>
        </div>
      </Router> 
     
      )
  }
}

ReactDOM.render(<App2 />, document.getElementById('app1'));

/*

for user/554
User({match})=> {match.params.username}
<Link to=''></Link>
<NavLink to='' activeStyle={} exact></NavLink>
<Redirect to''></Redirect>
  history={hashHistory}   ???????

*/

//neeed to have the home page
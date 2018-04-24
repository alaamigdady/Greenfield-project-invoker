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
import PatientList from './Rifaa/components/List.jsx';
import Home from './Jozaa/pages/Home.jsx';
import Login from './Jozaa/pages/Login.jsx';
import SignUp from './Jozaa/pages/SignUp.jsx';
//style for div top
const div1={
  
};
//style for div top
const div2={
  backgroundColor:'#123456',
  align:'center',
  height:'28px',
  border: 'solid red 2px',
};
//the style for the main header
const header1={
  color:'red',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'12px',
  marginLeft:'10px',
  marginTop:'2px',
};
//the style for the main pic
const pic={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
};

//style for not active link
const notActive1={
  color: 'white',
  marginLeft:'10%',
  fontSize:'10px',
};
const notActive2={
  color: 'white',
  marginLeft:'10%',
  marginRight:'10%',
  fontSize:'10px',
};
const notActive3={
  color: 'white',
  marginRight:'10%',
  fontSize:'10px',
};
//style for active link
const Active={
  fontWeight:'bold',
  padding:'3px',
  fontSize:'12px',
};
//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    return (
      <Router >
        <div style={div1}>
          <div style={div2}>
            <h2 style={header1}>
              <img style={pic} src="https://pacificmedicalacls.com/images/pluslogo.png" alt="logo" height="20" width="20"/> 
              <span style={header1}>Medical Record</span>
              <NavLink to='/' exact strict style={notActive1} activeStyle={Active}>Home</NavLink>
              <NavLink to='/login' exact strict style={notActive2} activeStyle={Active}>Login</NavLink>
              <NavLink to='/signup' exact strict style={notActive3} activeStyle={Active}>Sign Up</NavLink>
            </h2>


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


//https://harrisguidi.com/wp-content/uploads/2017/10/shutterstock_143828728.jpg

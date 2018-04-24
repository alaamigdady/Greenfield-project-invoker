//import main dependencies react + react-dom + jquery
//to work react
import React from 'react';
//to work react dom
import ReactDOM from 'react-dom';
//to work in ajax
import $ from 'jquery';
//and the router
import {BrowserRouter as Router, Route, Link, NavLink, Redirect, Prompt, IndexRoute, hashHistory } from "react-router-dom";
//import each components
import PatientList from './Rifaa/components/List.jsx';
import Home from './Jozaa/pages/Home.jsx';
import Login from './Jozaa/pages/Login.jsx';
import SignUp from './Jozaa/pages/SignUp.jsx';
//style for div top
const div2={
  backgroundColor:'#123456',
  align:'center',
  height:'52px',
  border: 'solid #d22d10 4px',
};
//the style for the all top bar
const header1={
  color:'#d22d10',
  fontSize:'25px',
  marginLeft:'10px',
  marginTop:'2px',
};
//the style for the main header
const header2={
  color:'#d22d10',
  fontWeight:'bold',
  fontSize:'25px',
  marginLeft:'10px',
    marginTop:'20px',

};
//style for not active link
const notActive1={
  color: 'white',
  marginLeft:'10%',
  fontSize:'20px',
};
const notActive2={
  color: 'white',
  marginLeft:'10%',
  marginRight:'10%',
  fontSize:'20px',
};
const notActive3={
  color: 'white',
  marginRight:'10%',
  fontSize:'20px',
};
//style for active link
const Active={
  fontWeight:'bold',
  fontSize:'20px',
  color: '#d22d10',
};
//make the main page in div id app1 name App2
class App2 extends React.Component {
  //what render -----------------need change for the router
  render () {
    return (
      <Router >
        <div>
          <div style={div2}>
            <div style={header1}>
              {/*style={{marginRight:'10px'}}*/}
              <NavLink to='/' exact strict > 
              <img  src="https://pacificmedicalacls.com/images/pluslogo.png" alt="logo" height="40" width="40"/>
              <h style={header2}>Medical Record</h>
              </NavLink>
              <NavLink to='/' exact strict style={notActive1} activeStyle={Active}>Home</NavLink>
              <NavLink to='/login' exact strict style={notActive2} activeStyle={Active}>Login</NavLink>
              <NavLink to='/signup' exact strict style={notActive3} activeStyle={Active}>Sign Up</NavLink>
            </div>
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
1- for user/554
User({match})=> {match.params.username}

2-<Redirect to''></Redirect>
 
3- history={hashHistory}   ???????
    //this.props.history.push(path);

    import {withRouter} from 'react-router-dom';
withRouter

4-neeed to have the home page

*/

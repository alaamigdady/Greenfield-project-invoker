//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
import {BrowserRouter as Router, Route,hashHistory, IndexRoute,  Link, NavLink, Redirect, Prompt } from "react-router-dom";
//import createHistory from 'history/createBrowserHistory'
//import { createHashHistory } from 'history'
//export const history = createHashHistory()
//the style for the main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'50px',
  fontFamily: 'Lobster',
};
//the style for number
const number={
  color:'#7a00a3',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for the user and password input
const input={
  padding: '10px 10px 10px 10px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button Sign Up
const button={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop:'20px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the page login what inside render
class Home extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      firstName:'',
      lastName: '',
      userName: '',
      password: '',
      loggedIn:true,
    };
  }
  //for logout button
  logout(){
    console.log(`you try to logoutDR`);
    const that=this
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/logout',
      //when success do this
      success: function (res) {
        alert(res);
        that.setState({loggedIn:false});
        window.location.href= window.location.origin+'/login'
      },
      //when error do this
      error: function (){
        alert(`Failed logout please try again DR`);
        console.log(`Failed logout please try again DR`);
      },
    }); 
  };
  newPatient(){
    console.log('you try to go to create new patient:');
    window.location.href=window.location.origin+'/newpatient';
  };
  render () {
    return (
      <Router /*history={hashHistory}*/>
        <div>
          <h2 style={header}>Home page</h2>
          <button onClick={this.logout.bind(this)} style={button}>Logout</button>
          <button onClick={this.newPatient.bind(this)} style={button}>New Patient</button>
        </div>
      </Router>
    )
  }
}
//export this component to can use
export default Home;










/*
//this page only to see if it is work or not the router
//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the two main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
};
///
//the page home what inside render
class Home extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    this.state={
    };
  }
  //what render -----------------need change style to be nice
  render () { 
    return (
      <div>
        <h2 style={header}>You Are In Home Page </h2>
      </div>
    )
  }
}
//export this component to can use
export default Home;


          <button onClick={() => history.push('/signup')} style={button}>redirect Sign Up</button>


*/



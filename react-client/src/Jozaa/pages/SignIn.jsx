//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the two main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center'
};
//the style for the user 
const user={
  color:'blue',
  fontWeight:'bold',
  textAlign:'center',
};
//the style for the user and password input 
const input={
  padding:'3px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};
//the style for the password 
const password={
  color:'red',
  fontWeight:'bold',
  textAlign:'center',
};
//the style for the button Sign In
const button={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid',
  marginTop:'10px'
};
//the style for the button Sign Up
const button2={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: 'green',
  color: 'white',
  border: '2px solid',
  marginTop:'10px'
};
//the page login what inside render
class SignIn extends React.Component {
  //what render -----------------need change
  render () { 
    return (
      <div>
        <h2 style={header}>Welcome To Medical Record</h2>
        
        <h3 style={user}>Username:</h3>
        <input placeholder="Username" style={input} ></input>
     
        <h3 style={password}>Password:</h3>
        <input placeholder="Password" style={input} ></input>
       
        <button style={button}>Sign In</button>
        <h5 style={password}>Dont have an account ?</h5>
        <button style={button2}>Sign Up</button>
      </div>
    )
  }
}
//export this component to can use
export default SignIn;




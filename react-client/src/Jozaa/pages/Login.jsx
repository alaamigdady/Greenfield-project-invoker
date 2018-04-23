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
//the style for the button Login
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
class Login extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      userName: '',
      password: '',
    };
  }
  //when change  ... change the
  //username
  onWrite3 (e) {
    this.setState({
      userName: e.target.value,
    });
  };
  //password
  onWrite4 (e) {
    this.setState({
      password: e.target.value,
    });
  };
  //for sign in button
  login() {
    console.log(`YOU WANT LOGIN : ${this.state.userName} ${this.state.password} `);
    //ajax request
    $.ajax({
      type: 'POST',
      url: '/login',
      data: {
        userName: `${this.state.userName}`,
        password: `${this.state.password}`
      },
      //when success do this
      success: function () {
        console.log('SUCCESS LOGIN');
      },
      //when error do this
      error: function (){
        console.log('FAILED LOGIN')
      },
    }); 
  }
  //what render -----------------need change
  render () { 
    return (
      <div>
        <h2 style={header}>Welcome To Medical Record</h2>
        
        <h3 style={user}>Username:</h3>
        <input value={this.state.userName} onChange={this.onWrite3.bind(this)} placeholder="Username" style={input} ></input>
     
        <h3 style={password}>Password:</h3>
        <input value={this.state.password} onChange={this.onWrite4.bind(this)} placeholder="Password" style={input} ></input>
       
        <button onClick={this.login.bind(this)} style={button}>Login</button>
        <h5 style={password}>Dont have an account ?</h5>
        {/*  sign up go to router   */}
        <button style={button2}>Sign Up</button>
      </div>
    )
  }
}
//export this component to can use
export default Login;




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
//the style for the first and last name 
const name={
  color:'#9900cc',
  fontWeight:'bold',
  textAlign:'center',
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
  textAlign:'center'
};
//the style for the button Sign Up
const button={
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
//the style for the button Sign In
const button2={
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
//the page login what inside render
class SignUp extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      firstName:'F',
      lastName: 'L',
      userName: 'U',
      password: 'P'
    }
  }
  //when change  ... change the
  //first name
  onWrite1 (e) {
    this.setState({
      firstName: e.target.value,
    });
  };
  //last name
  onWrite2 (e) {
    this.setState({
      lastName: e.target.value,
    });
  };
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
  saveUser() {
    console.log(`YOU MAKE NEW USER :  ${this.state.firstName} ${this.state.lastName} ${this.state.userName} ${this.state.password} `);
    //ajax request
    $.ajax({
      type: 'POST',
      url: '/signup',
      data: {
        firstName: `${this.state.firstName}`,
        lastName: `${this.state.lastName}`,
        userName: `${this.state.userName}`,
        password: `${this.state.password}`
      },
      success: function () {
        //when success
        console.log('success post after press button')
      }
    });
  }
  //what render -----------------need change
  render () { 
    //understand props
    //console.log(this.props.t1)
    return (
      <div>
        <h2 style={header}>Welcome To Medical Record</h2>

        <h3 style={name}>First name:</h3>
        <input /*undestand click */ value={this.state.firstName} onChange={this.onWrite1.bind(this)} placeholder="Insert your first name" style={input} ></input>
        
        <h3 style={name}>Last name:</h3>
        <input /*undestand click */ value={this.state.lastName} onChange={this.onWrite2.bind(this)} placeholder="Insert your last name" style={input} ></input>
        
        <h3 style={user}>Username:</h3>
        <input /*undestand click */ value={this.state.userName} onChange={this.onWrite3.bind(this)} placeholder="Insert your username" style={input} ></input>
     
        <h3 style={password}>Password:</h3>
        <input /*undestand click */ value={this.state.password} onChange={this.onWrite4.bind(this)} placeholder="Insert your password" style={input} ></input>
       
        <button /*click event*/ onClick={this.saveUser.bind(this)} style={button}>Sign Up</button>
        <h5 style={password}> Have an account ?</h5>
        <button style={button2}>Sign In</button>
      </div>
    )
  }
}
//export this component to can use
export default SignUp;




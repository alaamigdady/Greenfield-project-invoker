//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the main header
const header={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'40px',
  fontFamily: 'Lobster',
};
//the style for the user
const user={
  color:'#1B5494',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'20px',
  marginBottom:'-10px',
};
//the style for the password
const password={
  color:'#bb280e',
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
//the style for the button Login
const button={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  borderRadius: '10px',
  marginTop:'20px',
  fontSize:'20px',
  fontFamily: 'Lobster',
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
    //ajax request to sent the data to server then data base
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
  //what render -----------------need change style to be nice
  render () { 
    return (
      <div>
        <h2 style={header}>Welcome To Medical Record</h2>
        <h3 style={user}>Username:
          <input value={this.state.userName} onChange={this.onWrite3.bind(this)} placeholder="Username" style={input}>
          </input>
        </h3>
        <h3 style={password}>Password:
          <input type='password' value={this.state.password} onChange={this.onWrite4.bind(this)} placeholder="Password" style={input}>
          </input>
        </h3>
        <button onClick={this.login.bind(this)} style={button}>Login</button>
      </div>
    )
  }
}
//export this component to can use
export default Login;

import React from 'react';
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
    this.state={name: 'joz'}
  }
  //what render -----------------need change
  render (props) { 
    //understand props
    console.log(this.props)
    //function to undestand state 
    setTimeout(()=>{
      this.setState({name:'bob'})
    }, 2000)
    return (
      <div>
        <h2 style={header}>Welcome To Medical Record</h2>
        <h3>{this.state.name}</h3>
        <h3>{this.props.title}</h3>
        <h3 style={name}>First name:</h3>
        <input placeholder="Insert your first name" style={input} ></input>
        
        <h3 style={name}>Last name:</h3>
        <input placeholder="Insert your last name" style={input} ></input>
        
        <h3 style={user}>Username:</h3>
        <input placeholder="Insert your username" style={input} ></input>
     
        <h3 style={password}>Password:</h3>
        <input placeholder="Insert your password" style={input} ></input>
       
        <button style={button}>Sign Up</button>
        <h5 style={password}> Have an account ?</h5>
        <button style={button2}>Sign In</button>
      </div>
    )
  }
}
//export this component to can use
export default SignUp;




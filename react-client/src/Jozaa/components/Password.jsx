import React from 'react';
//react
//the style for the password
const passwordStyle={
  //marginTop:'100px',
  color:'red',
  fontWeight:'bold',
  textAlign:'center'
};
//the style for the password input
const userInputStyle={
  padding:'3px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};      
const Password = (props) => (
  <div>
    <h3 style={passwordStyle}> Password: </h3>
    <input placeholder="Insert your password" style={userInputStyle} ></input>
  </div>
)

export default Password;
import React from 'react';
//react
//the style for the user
const userStyle={
  //marginTop:'100px',
  color:'blue',
  fontWeight:'bold',
  textAlign:'center',
};
//the style for the user input
const userInputStyle={
  padding:'3px',
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};
const User = (props) => (
  <div>
    <h3 style={userStyle}>  Username: </h3>
    <input placeholder="Insert your username" style={userInputStyle} ></input>
  </div>
)

export default User;
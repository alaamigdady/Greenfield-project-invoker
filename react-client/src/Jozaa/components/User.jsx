import React from 'react';
//the style for the user
const userStyle={
  color:'blue',
  fontWeight:'bold',
  textAlign:'center',
};
//the style for the user input
const userInputStyle={
  padding:'3px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};
//what render for user component
class User extends React.Component {
  //what render
  render (props) { 
    return (
      <div>
        <h3 style={userStyle}>  Username: </h3>
        <input placeholder="Insert your username" style={userInputStyle} ></input>
      </div>
    )
  }
}
//export this component to can use
export default User;
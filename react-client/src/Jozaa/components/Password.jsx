import React from 'react';
//the style for the password
const passwordStyle={
  color:'red',
  fontWeight:'bold',
  textAlign:'center'
};
//the style for the password input
const userInputStyle={
  padding:'3px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
};  
//what render for password component
class Password extends React.Component {
  //what render
  render (props) { 
    return (
      <div>
        <h3 style={passwordStyle}> Password: </h3>
        <input placeholder="Insert your password" style={userInputStyle} ></input>
      </div>
    )
  }
}
//export this component to can use
export default Password;
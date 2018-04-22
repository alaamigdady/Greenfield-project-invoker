import React from 'react';
import User from '../components/User.jsx';
import Password from '../components/Password.jsx';
//the style for main header
const headerStyle={
  color:'black',
  fontWeight:'bold',
  textAlign:'center'
};
//the page login what inside render
const Login = (props) => (
  <div>
    <h2 style={headerStyle}>Welcome To Medical Record</h2>
    <h3 style={headerStyle}>Login</h3>
    <User></User>
    <Password></Password>
  </div>
)
//export this component to can use
export default Login;
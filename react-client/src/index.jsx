import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './Rifaa/components/List.jsx';
import User from './Jozaa/components/User.jsx';
import Password from './Jozaa/components/Password.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
  }
//add url
  componentDidMount() {
    $.ajax({
      url: '/patient', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    //the style for main header
    const headerStyle={
      //marginTop:'100px',
      color:'black',
      fontWeight:'bold',
      textAlign:'center'
    };
    return (
      <div>
        <h2 style={headerStyle}>Welcome To Medical Record</h2>
        <h3 style={headerStyle}>Login</h3>
        <User></User>
        <Password></Password>
      </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
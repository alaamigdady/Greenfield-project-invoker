//this page only to see if it is work or not the router

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

//the page home what inside render
class Home extends React.Component {
  //constructor to undestand state
  constructor(){
    super();
    this.state={

    };
  }


  //what render -----------------need change style to be nice
  render () { 
    return (
      <div>
        <h2 style={header}>You Are In Home Page </h2>
      </div>
    )
  }
}
//export this component to can use
export default Home;




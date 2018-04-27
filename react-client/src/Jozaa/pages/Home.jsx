//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';
//the style for the main header
const header1={
  color:'black',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'50px',
  fontFamily: 'Lobster',
};
//the style for retrieve one patient
const header3={
  color:'#1B5494',
  fontWeight:'bold',
  textAlign:'center',
  fontSize:'25px',
  fontFamily: 'Lobster',
  marginTop:'5px',
};
//style for input retrieve one patient
const input3={
  padding: '10px 10px 10px 10px',
  marginRight: '10px',
  marginLeft: '-20px',
  color:'black',
  fontSize:'15px',
  border: '2px solid black',
  borderRadius: '15px',
};
//the style for the button retrieve one patient
const button3={
  padding:'6px',
  backgroundColor: 'black',
  color: 'white',
  border: '2px solid black',
  fontSize:'20px',
  borderRadius: '15px',
  fontFamily: 'Lobster',
};
//the style for the button logout
const button1={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#bb280e',
  color: 'white',
  border: '2px solid #bb280e',
  marginTop:'20px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the style for the button create new patient
const button2={
  padding:'5px',
  //this three to make it center
  display: 'block',
  marginRight: 'auto',
  marginLeft: 'auto',
  backgroundColor: '#123456',
  color: 'white',
  border: '2px solid #123456',
  marginTop:'20px',
  fontSize:'20px',
  borderRadius: '10px',
  fontFamily: 'Lobster',
};
//the page home what inside render
class Home extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
      loggedIn:true,
      patientNumber:3,
      //the data get from retrieve
      data:{},
    };
  }
  //when change  ... change the
  //patient number
  onWrite1 (e) {
    this.setState({
      patientNumber: 1*e.target.value,
    });
  };
  //for logout button
  logout(){
    console.log('you try to logoutDR');
    const that=this
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/logout',
      //when success do this
      success: function (res) {
        alert(res);
        that.setState({loggedIn:false});
        window.location.href= window.location.origin+'/login'
      },
      //when error do this
      error: function (){
        alert('Failed logout please try again DR');
        console.log('Failed logout please try again DR');
      },
    }); 
  };
  //for button create new patient
  newPatient(){
    console.log('you try to go to create new patient:');
    window.location.href=window.location.origin+'/newpatient';
  };
  //for retrieve one patient
  retrieveOne(){
    console.log('you try to retrieve one patient', typeof this.state.patientNumber);
    const that=this
    //ajax request to logout
    $.ajax({
      type: 'GET',
      url: '/patient',
      data:{number:`${that.state.patientNumber}`},
      //when success do this
      success: function (res) {
        console.log('Sucess retrieve:',res[0].firstName);
        alert('Sucess retrieve: '+res[0].firstName);
        that.setState({data:res});
        //console.log(that.state.data);
        that.renderData()
      },
      //when error do this
      error: function (){
        alert('Failed retrieve one patient please try again DR');
        console.log('Failed retrieve one patient please try again DR');
      },
    }); 
  };
  //to save data to can use and render
  renderData(){
    console.log('HERE: ',this.state.data[0]);
    //i get the data now i neeed to render it

  };
  render () {
    return (
        <div1>
          <h2 style={header1}>Welcome DR</h2>
<div2 >
<h3 className='col-xs-4' style={header3}>Get all info for this patient:</h3>
<input className='col-xs-2' value={this.state.patientNumber} type='number' onChange={this.onWrite1.bind(this)} placeholder="Patient number" style={input3}></input>
<button className='col-xs-2' onClick={this.retrieveOne.bind(this)} style={button3}>Show the data now</button>
</div2>


{/*
          <button onClick={this.newPatient.bind(this)} style={button2}>Create New Patient</button>
          <button onClick={this.logout.bind(this)} style={button1}>Logout</button>
 */}        
        </div1>
    )
  }
}
//export this component to can use
export default Home;


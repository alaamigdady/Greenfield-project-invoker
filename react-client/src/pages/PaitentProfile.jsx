//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';


class PaitentProfile extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
     fullName:'',
     address:'',
     phone:'07',
     bday:'',
     gender:'',
     disability:'',
     drugs:'',
     pregnant:'',
     medications:'',
   };
 }


 submit(){
   const that=this;

   $.ajax({
    type: 'POST',
    url: '/paitentprofile',
    data: {
      fullName: `${this.state.fullName}`,
      address: `${this.state.adress}`,
      phone: `${this.state.phone}`,
      gender: `${this.state.gender}`,
      bday: `${this.state.bday}`,
      disability: `${this.state.disability}`,
      drugs: `${this.state.drugs}`,
      pregnant: `${this.state.pregnant}`,
      medications: `${this.state.medications}`,
    },
    success: function (res) {
      window.location.href= window.location.origin+'/'
    },

    error: function (){

    },

  });


 }

 logout(){
  const that=this
  $.ajax({
    type: 'GET',
    url: '/logout',
    success: function (res) {

    },

    error: function (){
    },
  }); 
};
changeName (e) {
  this.setState({
    fullName: e.target.value,
  });
};
changePhone (e) {
  this.setState({
    phone: e.target.value,
  });
};
changeAddress (e) {
  this.setState({
    address: e.target.value,
  });
};

changeDisability (e) {
  this.setState({
    disability: e.target.value,
  });
};

changePregnant (e) {
  this.setState({
    pregnant: e.target.value,
  });
};

changeMedications (e) {
  this.setState({
    medications: e.target.value,
  });
};

render () {
  return (
    <div>
    <h1> Paitent Profile</h1>

    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" value={this.state.fullName} onChange={this.changeName.bind(this)}></input> 
    <br></br>    
    <label for="phone" value={this.state.phone} onChange={this.changePhone.bind(this)}>Phone Number</label>
    <input type="text" id="phone"></input> 
    <br></br> 
    <label for="adress" value={this.state.adress} onChange={this.changeAddress.bind(this)}>Adress</label>
    <input type="text" id="adress"></input> 
    <br></br> 
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male"></input>&nbsp; &nbsp;
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="female"></input><br></br> 
    <br></br> 

    <label for="bday">Date Of Birth</label>
    <input type="date" name="bday" id="bday"></input>
    <br></br> 

   
    
    <button onClick={this.submit.bind(this)}>Save</button>



    </div>

    )
}
}
export default PaitentProfile;
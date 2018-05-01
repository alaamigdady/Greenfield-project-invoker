//to work react
import React from 'react';
//to work in ajax
import $ from 'jquery';


class DoctorProfile extends React.Component {
  constructor(){
    super();
    //all the data save before sent in state
    this.state={
     fullName:'',
     adress:'',
     phone:'07',
     gender:'',
     speciality:'Neurology',

   };
 }


 submit(){
   const that=this;

   $.ajax({
    type: 'POST',
    url: '/update',
    data: {
      fullName: `${this.state.fullName}`,
      adress: `${this.state.adress}`,
      phone:`${this.state.phone}`,
      gender:`${this.state.gender}`,
      speciality:`${this.state.speciality}`,
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
changephone (e) {
  this.setState({
    phone: e.target.value,
  });
};
changeAdress (e) {
  this.setState({
    adress: e.target.value,
  });
};

changeSpeciality (e) {
  this.setState({
    speciality: e.target.value,
  });
};

add (){
    window.location.href= window.location.origin+'/'
  }


render () {
  return (
    <div>
    <h1> Profile</h1>

    <label for="fullName">Full Name</label>
    <input type="text" id="fullName" value={this.state.fullName} onChange={this.changeName.bind(this)}></input> 
    <br></br>    
    <label for="phone" value={this.state.phone} onChange={this.changephone.bind(this)}>Phone Number</label>
    <input type="text" id="phone"></input> 
    <br></br> 
    <label for="adress" value={this.state.adress} onChange={this.changeAdress.bind(this)}>Adress</label>
    <input type="text" id="adress"></input> 
    <br></br> 
    <select onChange={this.changeSpeciality.bind(this)} value={this.state.speciality}>
    <option value="Neurology">Neurology</option>
    <option value="Dermatology">Dermatology</option>
    <option value="Anesthesiology">Anesthesiology</option>
    <option value="Cardiovascular">Cardiovascular Disease</option>
    <option value="Pediatrics">Pediatrics</option>
    <option value="Plastic Surgery">Plastic Surgery</option>
    <option value="Family Medicine">Family Medicine</option>
    </select>
    <br></br> 
    <label for="male">Male</label>
    <input type="radio" name="gender" id="male" value="male"></input><br></br> 
    <label for="female">Female</label>
    <input type="radio" name="gender" id="female" value="female"></input><br></br> 
    <br></br> 
    <br></br> 
    <button onClick={this.submit.bind(this)}>Save</button>
    <button onClick={this.add.bind(this)}>Add Record</button>
    



    </div>

    )
}
}


export default DoctorProfile;
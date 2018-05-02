import React from 'react';
//to work in ajax
import $ from 'jquery';

class Doctor extends React.Component {
	constructor(){
		super();
	}

	add (){
		window.location.href= window.location.origin+'/newpatient'
	}
	
	search (){
		window.location.href= window.location.origin+'/record'
	}

	update (){
		window.location.href= window.location.origin+'/doctorProfile'
	}

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
    }) 
  }

	render() {
		return (
			<div>
			<button onClick={this.add.bind(this)}>Add Record</button>
			<button onClick={this.search.bind(this)}>Search</button>
			<button onClick={this.logout.bind(this)}>Log Out</button>
			<button onClick={this.update.bind(this)}>Update your Profile</button>
			<div></div>

			</div>
			)
	}

}

export default Doctor
import React from 'react';
//to work in ajax
import $ from 'jquery';


const body={
	backgroundColor: '#BDF1F6',
	fontFamily: 'sans-serif',
	fontSize: '0.85em',
	color: 'rgba(66,66,66 ,1)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '91vh',
	width: '100vw',
}



const button={
	borderRadius: '40px',
	backgroundColor: '#d22d10',
	border: 'none',
	color: '#FFFFFF',
	textAlign: 'center',
	fontSize: '15px',
	padding: '15px',
	width: '200px',
	transition: 'a1ll 0.5s',
	cursor: 'pointer',
	margin: '15px',
	display:'block',

}

const newStyle = {
	display:'block',
}


class Doctor extends React.Component {
	constructor(){
		super();
		this.state={
			info:[]
		}
	}

	componentDidMount() {
		console.log('hi',this.state.info);
		const that=this
		$.ajax({
			type: 'GET',
			url: '/getInfo',
			success: function (res) {
      	//console.log('hh',res)
      	that.setState({info:res })
      	//console.log(that.state.info)
      	
      }
  })
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
		<div style={body}>
		<div style={newStyle}>
		<button style={button} onClick={this.add.bind(this)}><span>Add Record </span></button>
		<br></br>
		<br></br>
		<button style={button} onClick={this.search.bind(this)}>Search</button>
		<br></br>
		<br></br>
		<button style={button} onClick={this.logout.bind(this)}>Log Out</button>
		<br></br>
		<br></br>
		<button style={button} onClick={this.update.bind(this)}>Update your Profile</button>
		<div>
		{this.state.info.map((obj)=>
			<h3> name:{obj.firstName + " " +obj.lastName } , age:{obj.age } </h3>)
	}

	</div>

	</div>
	</div>
	)
}

}

export default Doctor
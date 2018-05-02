import React from 'react';
//to work in ajax
import $ from 'jquery';

class Doctor extends React.Component {
	constructor(){
		super();
	}

	add (){
		window.location.href= window.location.origin+'/'
	}

	render() {
		return (
			<div>
			<button onClick={this.add.bind(this)}>Add Record</button>

			<div></div>

			</div>
			)
	}

}

export default Doctor
//import dependencies
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Template} from 'meteor/templating';
import {Blaze} from 'meteor/blaze';


//create component
class Accounts extends Component {
	componentDidMount(){
		//render Blaze authentication form and stick it in our render()
		this.view = Blaze.render(Template.loginButtons, ReactDOM.findDOMNode(this.refs.container));
	}

	componentWillUnmount(){
		//remove and clean up the form we just made
		Blaze.remove(this.view);
	}

	render(){
		return (
			<div ref='container'></div>
		);
	}
}

//export
export default Accounts;

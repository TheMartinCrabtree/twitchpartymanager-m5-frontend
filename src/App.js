import React from 'react';
import './App.css';
import Notfound from  './Notfound.js';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import  Login from './Login.js';
import Maincontainer from './Maincontainer.js';

export default class App extends React.Component {
	state={
		loggedin: false,
		admin: false,
		userinfo: {}
	}

	isLoggedIn=()=>{
		return this.state.loggedin;
	}

	loginUser=(event, userData)=>{
		console.log("Received User Data in app", userData)
		
		if(userData){
			this.setState({
				loggedin: true,
				userinfo: userData
			})
		}
	}

	render(){
		return (
			<main className="App-main App-grid-container">
				<header className="App-header item1">
					<h1 > This is the header </h1>
				</header>
				<div className="App-logincheck item3">
					{ !!this.isLoggedIn() ? 
						<Maincontainer  admin={this.state.admin} loggedin={this.state.loggedin} /> 
						:
						 <Login loginUser={this.loginUser} /> }
				</div>
				<footer className="App-footer item5">
					<span >Footer content will go here.</span>
				</footer>
			</main>
		);
	}

}


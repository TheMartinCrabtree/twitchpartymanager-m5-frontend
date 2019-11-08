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
				userinfo: userData,
				admin: userData.administrator
			})
		}
	}

	handleLogout=(event)=>{
		console.log("logging out")
		this.setState({
			loggedin: false,
			admin: false,
			userinfo: {}
		})
	}

	render(){
		return (
			<main className="App-main">
				<header className="App-header">
					<h2 > The Best Twitch Event Organizer </h2>
				</header>
				<div className="App-logincheck ">
					{ !!this.isLoggedIn() ? 
						<Maincontainer  
							admin={this.state.admin} 
							loggedin={this.state.loggedin} 
							userinfo={this.state.userinfo} 
							handleLogout={this.handleLogout}
							className="App-maincontainer"
						/> 
						:
						<Login className="App-logincontainer"  loginUser={this.loginUser} /> 
					}
				</div>
				<footer className="App-footer ">
					<span >Footer content will go here.</span>
				</footer>
			</main>
		);
	}

}


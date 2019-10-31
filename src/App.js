import React from 'react';
import './App.css';
import Notfound from  './Notfound.js';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import  Login from './Login.js';
import Maincontainer from './Maincontainer.js';

export default class App extends React.Component {
	state={
		loggedin: true,
		admin: false
	}

	isLoggedIn=()=>{
		return false;
	}

	render(){
		return (
			<main className="App-main">
				<header className="App-header">
					<h1 > This is the header </h1>
				</header>
				<div className="App-logincheck">
					{ !!this.isLoggedIn() ? <Maincontainer  admin={this.state.admin} loggedin={this.state.loggedin} /> : <Login /> }
				</div>
				<footer className="App-footer">
					<span >Footer content will go here.</span>
				</footer>
			</main>
		);
	}

}


import React from 'react';
import './App.css';
import Notfound from  './Notfound.js';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import  Login from './Login.js';
import Maincontainer from './Maincontainer.js';

function App() {

	state={ 
		loggedin = false,
		admin=true
	}

	return (
		<main className="App-main">
			<header className="App-header">
				<h1 > This is the header </h1>
			</header>
			<div className="App-logincheck">
				{ !!this.isLoggedIn() ? <Maincontainer /> : <Login /> }
			</div>
		</main>
	);
}

export default App;

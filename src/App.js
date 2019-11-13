import React from 'react';
import './App.css';
import { Container, Section, Footer, Heading, Hero} from  'react-bulma-components';
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
			<main  >
				<Hero color='primary'  >
					<Hero.Body >
						<Heading	>
							The Best Twitch Event Organizer 
						</Heading>
					</Hero.Body>
				</Hero>
			
				
				<div  >
					{ !!this.isLoggedIn() ? 
						<Maincontainer  
							admin={this.state.admin} 
							loggedin={this.state.loggedin} 
							userinfo={this.state.userinfo} 
							handleLogout={this.handleLogout}
							
						/> 
						:
						<Login   loginUser={this.loginUser} /> 
					}
				</div>
				<Footer >
					<Container>
						<p color="primary" >
							The Best Twitch Event Organizer
						</p>
					</Container>
				</Footer>
				
			</main>
		);
	}

}


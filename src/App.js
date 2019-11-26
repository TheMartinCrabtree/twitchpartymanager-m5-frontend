import React from 'react';
import './App.css';
import { Container, Section, Footer, Heading, Hero} from  'react-bulma-components';
import Notfound from  './Notfound.js';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import  Login from './Login.js';
import Maincontainer from './Maincontainer.js';

export default class App extends React.Component {
	// temp state, need to synch with backend
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
				<Hero color='link'  >
					<Hero.Head style={{marginLeft: '10vw', height: '10vw' }}   >
						<Section>
							<Heading textColor="white-ter"	>
								The Best Twitch Event Organizer 
							</Heading>
						</Section>
					</Hero.Head>
				</Hero>
			
				
				<div  style = {{  padding: "20px", background: "#f3e6ff" }}   >
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
				<Footer
					style = {{
						padding: "15px",
						background: "#9933ff"
        		}} >
					<Container>
						<div  >
							<font color="#FFFFFF">
								The Best Twitch Event Organizer
							</font>
						</div>
					</Container>
				</Footer>
				
			</main>
		);
	}

}


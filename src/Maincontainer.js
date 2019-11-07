import React from 'react';
import './App.css';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import Adminview from './Adminview.js';
import Userview from './Userview.js';
import Navbar from './Navbar';
import Eventlist from './components/Eventlist.js';

export default class Maincontainer extends React.Component{
    state ={
        events: [],
        displayEvent: {}
    }

    componentDidMount(){
        fetch("http://localhost:3000/events")
        .then(response=>response.json())
        .then(eventlist=>{
            console.log("populating event list", eventlist)
            this.setState({
                events: eventlist
            })
        })
    }

    handleAddEvent=(event, eventData)=>{
        event.preventDefault();
        console.log("received event data", eventData);
        this.createEvent(eventData);
        
    }

    createEvent=(event)=>{
        fetch("http://localhost:3000/events",{
            method: "POST",
            body: JSON.stringify({
                event
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(newEvent=>{
            console.log("new event created", newEvent)
            this.linkUserToEvent(newEvent)
        })
    }

    linkUserToEvent=(newEvent)=>{
        fetch("http://localhost:3000/joinuserevents",{
            method: "POST",
            body: JSON.stringify({
                event_id: newEvent.id,
                user_id: this.props.userinfo.id
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(eventjoin=>{
            console.log("event join created", eventjoin)
        })
        this.setState({
            events: [...this.state.events, newEvent]
        })
    }

    handleViewEvent=(event, eventObj)=>{
        console.log("viewing event")
        this.setState({
            displayEvent: eventObj
        })
    }

    render(){
        return(
            <div >
                <span>selecting containers based on admin or user</span>
                <Navbar  userinfo={this.props.userinfo} handleLogout={this.props.handleLogout}  />
                <Eventlist  userinfo={this.props.userinfo}events={this.state.events} handleViewEvent={this.handleViewEvent}  />
                { this.props.admin ?  
                    <Adminview userinfo={this.props.userinfo} handleAddEvent={this.handleAddEvent} displayEvent={this.state.displayEvent}  /> 
                    : 
                    <Userview  userinfo={this.props.userinfo}  displayEvent={this.state.displayEvent}  /> 
                } 
            </div>
        )
    }
}
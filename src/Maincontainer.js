import React from 'react';
import './App.css';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import Adminview from './Adminview.js';
import Userview from './Userview.js';
import Navbar from './Navbar';
import Eventlist from './components/Eventlist.js';

export default class Maincontainer extends React.Component{
    state ={}

    render(){
        return(
            <div >
                <span>selecting containers based on admin or user</span>
                <Navbar  userinfo={this.props.userinfo} handleLogout={this.props.handleLogout}  />
                <Eventlist  userinfo={this.props.userinfo} />
                { this.props.admin ?  <Adminview userinfo={this.props.userinfo}   /> : <Userview  userinfo={this.props.userinfo}   /> } 
            </div>
        )
    }
}
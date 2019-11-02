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
            <div className="Main-grid-container">
                <span>selecting containers based on admin or user</span>
                <Navbar className="item6" />
                <Eventlist className="item8"  />
                { this.props.admin ?  <Adminview className="item7" /> : <Userview className="item3" /> } 
            </div>
        )
    }
}
import React from 'react';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import Adminview from './Adminview.js';
import Userview from './Userview.js';
import Navbar from './Navbar';
import Eventlist from './components/Eventlist.js';

export default class Maincontainer extends React.Component{
    state ={}

    render(){
        return(
            < >
                <span>selecting containers based on admin or user</span>
                <Navbar  />
                <Eventlist  />
                { this.props.admin ?  <Adminview /> : <Userview /> } 
            </>
        )
    }
}
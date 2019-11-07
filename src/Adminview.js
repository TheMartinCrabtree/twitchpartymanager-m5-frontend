import React from 'react';
import Menu from './components/Menu.js';
import EventCreate from './components/Eventcreate'

export default(props)=>{
    return(
        <div >
            <h3>Admin View</h3>
            <Menu displayEvent={props.displayEvent} />
            <EventCreate handleAddEvent={props.handleAddEvent}  />
        </div>
    ) 
}
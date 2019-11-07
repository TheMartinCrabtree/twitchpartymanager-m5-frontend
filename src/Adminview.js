import React from 'react';
import Menu from './components/Menu.js';
import EventCreate from './components/Eventcreate'

export default(props)=>{
    return(
        <div >
            <h3>Admin View</h3>
            <Menu 
                displayEvent={props.displayEvent}
                handleSignupTextInput={props.handleSignupTextInput}
                ingamename={props.ingamename} 
                handleSignupSubmit={props.handleSignupSubmit} 
                handleRemoveSignup={props.handleRemoveSignup}
            />
            <EventCreate handleAddEvent={props.handleAddEvent}  />
        </div>
    ) 
}
import React from 'react';
import Menu from './components/Menu.js';
import EventCreate from './components/Eventcreate'

export default(props)=>{
    return(
        <div >
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
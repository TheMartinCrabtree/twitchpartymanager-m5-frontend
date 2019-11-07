import  React from 'react';

// Primary nav bar that displays username and logout
export default (props)=>{
    return(
        <nav>
            This is the nav bar with profile and logout options.
            <span>Username : {props.userinfo.username} </span>
            <button onClick={(event)=>props.handleLogout(event)}>Logout</button>
            
        </nav>
    )
}
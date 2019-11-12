import  React from 'react';
import { Navbar, Button } from  'react-bulma-components';

// Primary nav bar that displays username and logout
export default (props)=>{
   

    return(
        <Navbar className="is-dark" >
            <Navbar.Container position="end">
                <Navbar.Item> <h4>Username : {props.userinfo.username}</h4>   </Navbar.Item>  
                <Navbar.Item> <Button color="info" className="navbar-item" onClick={(event)=>props.handleLogout(event)}>Logout</Button></Navbar.Item>
            </Navbar.Container>
        </Navbar>
    )
}
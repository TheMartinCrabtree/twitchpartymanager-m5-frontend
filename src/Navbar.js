import  React from 'react';
import { Navbar, Button , Media, Image, Heading} from  'react-bulma-components';

// Primary nav bar that displays username and logout
export default (props)=>{
   

    return(
        <Navbar className="is-dark" >
            <Navbar.Container position="end">
                <Navbar.Item>  
                    <Media>
                        <Media.Item renderAs="figure" position="left">
                            <Image size={24} alt="avatar img" src={props.userinfo.avatar_img} />
                        </Media.Item>
                        <Media.Item>
                            <Heading textSize={6} textColor="white-ter" >Username: {props.userinfo.username}  </Heading>
                        </Media.Item>
                    </Media>

                </Navbar.Item>  
                <Navbar.Item> <Button color="info" className="navbar-item" onClick={(event)=>props.handleLogout(event)}>Logout</Button></Navbar.Item>
            </Navbar.Container>
        </Navbar>
    )
}
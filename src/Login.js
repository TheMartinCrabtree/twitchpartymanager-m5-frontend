import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Heading, Button, Section, Box, Card, Media, Image} from 'react-bulma-components';


export default class Login extends React.Component{
    state={
        username: "",
        userdata: {}
    }


    componentDidMount(){
        console.log(window.location.href)
        let code = null
        let url = window.location.href;
        if(url.includes("code")){
            url = url.split('?')[1];
            url = url.split('&')[0];
            code  = url.split('=')[1];
        }

        if(code){
            console.log("attempting post to backend", code)
            fetch("http://localhost:3000/login", {
                method: "POST",
                body: JSON.stringify({
                    accesstoken: code
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response=>response.json())
            .then(userData=>{
                console.log("returned from backend", userData)
                if(userData.user){
                    this.setState({
                        userdata: userData.user,
                        username: userData.user.username
                   })
                }
            })
        }
        
    }
    
    onClick(){
        window.location.href='https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=jro8lw9sohw9cwhqghg0f6dahn2eqv&redirect_uri=http://localhost:3006&scope=user_read+openid&claims={"id_token":{"email_verified":null}, "userinfo":{"picture":null, "preferred_username":null}}';
    }
    

    render(){
        return(
            <Container >
                <Section >
                    <Box>
                    
                        { this.state.username === "" ?  
                        <Card>
                            <Card.Header>
                                <Card.Header.Title textSize={4} >Login using your twitch account:</Card.Header.Title>
                            </Card.Header>
                            <Card.Content>
                                <nav >
                                    <Button color="info" id="loginbutton" onClick={this.onClick}>Login with Twitch</Button>
                                </nav>
                            </Card.Content>
                        </Card>
                        :
                        <Card>
                            <Card.Header>
                                <Media>
                                    <Media.Item renderAs="figure" position="left">
                                    <Image size={65} alt="65x65" src={this.state.userdata.avatar_img} />
                                    </Media.Item>
                                    <Media.Item>
                                        <Heading>Welcome: {this.state.username} </Heading>
                                    </Media.Item>
                                </Media>
                            </Card.Header>


                            <Card.Content>
                                <Section>
                                <Button color="info" onClick={(event)=>this.props.loginUser(event, this.state.userdata)}><h3>Continue</h3></Button>
                                </Section>
                            </Card.Content>
                        </Card>
                        }
                    </Box>
                </Section>
            </Container>
        )
    }
}
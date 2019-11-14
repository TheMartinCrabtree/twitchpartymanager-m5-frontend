import React from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container, Heading, Button, Section, Box} from 'react-bulma-components';


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
        window.location.href='https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=jro8lw9sohw9cwhqghg0f6dahn2eqv&redirect_uri=http://localhost:3006&scope=user_read+openid&claims={"id_token":{"email_verified":null}}';
    }
    

    render(){
        return(
            <Container >
                <Section >
                    <Box>

                    <Heading >
                        Login to continue:
                    </Heading>
                        { this.state.username === "" ?  
                        <nav >
                            <Button color="info" id="loginbutton" onClick={this.onClick}>Login with Twitch</Button>
                        </nav>
                        :
                        <article >
                        <Heading subtitle >
                            Welcome:  {this.state.username}
                        </Heading>
                        <div>
                            <Button color="info" onClick={(event)=>this.props.loginUser(event, this.state.userdata)}><h3>Continue</h3></Button>
                        </div>
                        </article>}
                    </Box>
                </Section>
            </Container>
        )
    }
}
import React from 'react';


export default class Login extends React.Component{
    state={
        username: "",
        userdata: {}
    }


    componentDidMount(){
        console.log(window.location.href)
        let url = window.location.href;
        url = url.split('?')[1];
        url = url.split('&')[0];
        let code  = url.split('=')[1];

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

    }
    
    onClick(){
        window.location.href='https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=jro8lw9sohw9cwhqghg0f6dahn2eqv&redirect_uri=http://localhost:3006&scope=user_read+openid&claims={"id_token":{"email_verified":null}}';
    }
    

    render(){
        return(
            <section >
                <span >This is the login section</span>
                    <nav >
                        <button id="loginbutton" onClick={this.onClick}>Login with Twitch</button>
                    </nav>
                    
                    <article >
                    <h3>
                        Welcome:  {this.state.username}
                    </h3>
                    <div>
                        <button onClick={(event)=>this.props.loginUser(event, this.state.userdata)}><h3>Continue</h3></button>
                    </div>
                    </article>
            </section>
        )
    }
}
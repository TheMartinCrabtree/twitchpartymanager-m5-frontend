import React from 'react';



export default class Login extends React.Component{

    onClick(){
        window.location.href="https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=jro8lw9sohw9cwhqghg0f6dahn2eqv&redirect_uri=http://localhost:3006&scope=user:edit+user:read:email";
    }
    


    render(){
        return(
            <section >
                <span >This is the login section</span>
                <nav >
                    <button id="loginbutton" onClick={this.onClick}>Login with Twitch</button>
                </nav>

            </section>
        )
    }
}
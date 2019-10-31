import React from 'react';


export default class Login extends React.Component{

    onClick(){
        window.location.href="https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=[ClientID]&redirect_uri=[http://localhost:3006/]&scope=[SCOPES_REQUIRES] 610";
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
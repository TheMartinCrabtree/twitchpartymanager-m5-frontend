import React from 'react';
import Menu from './components/Menu.js';
import EventCreate from './components/Eventcreate'
import {  Content, Card, Section } from  'react-bulma-components';

export default(props)=>{
    return(
        
        <div >
            <Menu 
                displayEvent={props.displayEvent}
                myevents={props.myevents}
                handleSignupTextInput={props.handleSignupTextInput}
                ingamename={props.ingamename} 
                handleSignupSubmit={props.handleSignupSubmit} 
                handleRemoveSignup={props.handleRemoveSignup}
            />

            <Section>
                <Card >
                    <Card.Header backgroundColor="dark" >
                        <Card.Header.Title textColor="white-ter" >Admin tools:</Card.Header.Title>
                    </Card.Header>
                    <Card.Content backgroundColor="grey-lighter"  >
                        <Content>
                            <EventCreate handleAddEvent={props.handleAddEvent}  />
                        </Content>
                    </Card.Content>
                </Card>
            </Section>
            
        </div>
    ) 
}
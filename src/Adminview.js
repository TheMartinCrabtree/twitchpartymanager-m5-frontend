import React from 'react';
import Menu from './components/Menu.js';
import EventCreate from './components/Eventcreate';
import AnnouncementCreate from './components/AnnouncementCreate'
import {  Content, Card, Section } from  'react-bulma-components';

export default(props)=>{
    return(
        
        <div >
            <Menu 
                displayEvent={props.displayEvent}
                myevents={props.myevents}
                announcements={props.announcements}
                deleteAnn={props.deleteAnn}
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
                        <Content>
                            <AnnouncementCreate handleAddAnnouncement={props.handleAddAnnouncement}  />
                        </Content>
                    </Card.Content>
                </Card>
            </Section>
            
        </div>
    ) 
}
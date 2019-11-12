import  React from 'react';
import { Container, Navbar, Tabs, Section } from  'react-bulma-components';
import Announcement from './Announcement.js';
import Calendar from './Calendar.js';
import Details from './Details'
import {Switch, Route} from 'react-router-dom'

export default class Menu extends React.Component{
    state={
        activeTab: "announcement"

    }

    handleTabClick=(event)=>{
        console.log("tab clicked", event.target.name)
        this.setState({
            activeTab: event.target.name
        })
    }

    showTab=()=>{
        switch(this.state.activeTab){
            case "announcement":
                return <Announcement />
            break;
            case "calendar":
                return <Calendar />
            break;
            case "details":
                   return  <Details 
                    displayEvent={this.props.displayEvent}
                    handleSignupTextInput={this.props.handleSignupTextInput}
                    ingamename={this.props.ingamename}
                    handleSignupSubmit={this.props.handleSignupSubmit} 
                    handleRemoveSignup={this.props.handleRemoveSignup}
                />
            break;

        }
    }


    render(){
        return(
            <div > 
                <Tabs className="is-centered is-medium is-boxed" >
                    <Tabs.Tab 
                        name="announcement" 
                        onClick={this.handleTabClick}
                        active={this.state.activeTab==="announcement" ? true : false} >
                        Announcements
                    </Tabs.Tab>
                    <Tabs.Tab 
                        name="calendar" 
                        onClick={this.handleTabClick}
                        active={this.state.activeTab==="calendar" ? true : false}   >
                        Calendar
                    </Tabs.Tab>
                    <Tabs.Tab 
                        name="details" 
                        onClick={this.handleTabClick}
                        active={this.state.activeTab==="details" ? true : false}   >
                        Details
                    </Tabs.Tab>
                </Tabs>
                
               <Section >
                   {this.showTab()}
               </Section>
            </div>
        )
    }

}
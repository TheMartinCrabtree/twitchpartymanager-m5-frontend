import  React from 'react';
import { Tabs } from  'react-bulma-components';
import Announcement from './Announcement.js';
import Calendar from './Calendar.js';
import Details from './Details'
import {Switch, Route} from 'react-router-dom'

export default class Menu extends React.Component{
    state={
        activeTab: "announcement"

    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.displayEvent.id !== this.props.displayEvent.id){
            this.setState({
                activeTab: "details"
            })
        }
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
                return <Announcement 
                    announcements={this.props.announcements}
                    deleteAnn={this.props.deleteAnn ? this.props.deleteAnn : null }
                      />
            break;
            case "calendar":
                return <Calendar 
                    myevents={this.props.myevents}
                    handleRemoveSignup={this.props.handleRemoveSignup} />
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
                <Tabs className="is-centered is-medium is-boxed"    >
                    <Tabs.Tab 
                        style = {{  border: "1px solid #b3b3cc", borderRadius: "5px"  }} 
                        name="announcement" 
                        onClick={this.handleTabClick}
                        active={this.state.activeTab==="announcement" ? true : false}
                        backgroundColor={this.state.activeTab==="announcement" ? "grey-light" : "white-ter"} >
                        Announcements
                    </Tabs.Tab>
                    <Tabs.Tab 
                        style = {{  border: "1px solid #b3b3cc", borderRadius: "5px" }}
                        name="calendar" 
                        onClick={this.handleTabClick}
                        active={this.state.activeTab==="calendar" ? true : false}
                        backgroundColor={this.state.activeTab==="calendar" ? "grey-light" : "white-ter"}    >
                        Calendar
                    </Tabs.Tab>
                    <Tabs.Tab 
                        style = {{  border: "1px solid #b3b3cc", borderRadius: "5px" }}
                        name="details" 
                        onClick={this.handleTabClick}
                        active={this.state.activeTab==="details" ? true : false}
                        backgroundColor={this.state.activeTab==="details" ? "grey-light" : "white-ter"}    >
                        Details
                    </Tabs.Tab>
                </Tabs>
                
               <div >
                   {this.showTab()}
               </div>
            </div>
        )
    }

}
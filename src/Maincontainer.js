import React from 'react';
import './App.css';
import { Columns, Container } from  'react-bulma-components';
import {Route, NavLink, Link, Switch } from 'react-router-dom';
import Adminview from './Adminview.js';
import Userview from './Userview.js';
import NavbarComp from './Navbar';
import Eventlist from './components/Eventlist.js';


export default class Maincontainer extends React.Component{
    state ={
        events: [],
        displayEvent: {},
        ingamename: "",
        myevents: [],
        activetab: "announcements",
        announcements: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/events")
        .then(response=>response.json())
        .then(eventlist=>{
            console.log("populating event list", eventlist)
            this.setState({
                events: eventlist
            })
        })

        fetch("http://localhost:3000/signups/"+`${this.props.userinfo.id}`)
        .then(response=>response.json())
        .then(signuplist=>{
            console.log("populating myevent list", signuplist)
            // NEED TO MOVE THE MAP LOGIC TO THE BACKEND
            signuplist = signuplist.map((listObj)=>{
                return listObj.event
            })
            if(signuplist.length > 0){
                this.setState({
                    myevents: signuplist
                })
            }
        })

        fetch("http://localhost:3000/announcements")
        .then(response=>response.json())
        .then(announcementlist=>{
            this.setState({
                announcements: announcementlist.announcements
            })
        })

    }


    handleAddEvent=(event, eventData)=>{
        event.preventDefault();
        console.log("received event data", eventData);
        this.createEvent(eventData);
        
    }

    createEvent=(event)=>{
        fetch("http://localhost:3000/events",{
            method: "POST",
            body: JSON.stringify({
                event
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(newEvent=>{
            console.log("new event created", newEvent)
            this.linkUserToEvent(newEvent)
        })
    }

    linkUserToEvent=(newEvent)=>{
        fetch("http://localhost:3000/joinuserevents",{
            method: "POST",
            body: JSON.stringify({
                event_id: newEvent.id,
                user_id: this.props.userinfo.id,
                ingamename: this.state.ingamename
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(eventjoin=>{
            console.log("event join created", eventjoin)
        })
        this.setState({
            events: [...this.state.events, newEvent],
            myevents: [...this.state.myevents, newEvent]
        })
    }

    handleViewEvent=(event, eventObj)=>{
        console.log("viewing event")
        this.setState({
            displayEvent: eventObj
        })
    }

    handleSignupTextInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSignupSubmit=(event, eventObj)=>{
        event.preventDefault();
        console.log("signup submitted", eventObj)
        
        
        if(this.state.myevents.some((myevent)=>{return myevent.id===eventObj.id})){
            alert("You are already signed up!");
            return this.setState({
                ingamename: ""
            })
        }
        else{
            return fetch("http://localhost:3000/joinuserevents",{
                method: "POST",
                body: JSON.stringify({
                    event_id: eventObj.id,
                    user_id: this.props.userinfo.id,
                    ingamename: this.state.ingamename
                }),
                headers:{
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response=>response.json())
            .then(eventjoin=>{
                console.log("event join created", eventjoin)
                
                return this.setState({
                    ingamename: "",
                    myevents: [...this.state.myevents, eventObj]
                })
            })

        }
        
        
        
    }

    handleRemoveSignup=(event, eventID)=>{
        console.log("removing event from signup list")
        if(this.state.myevents.some((myevent)=>{return myevent.id===eventID})){
            let myeventsUpdated = this.state.myevents.filter((myevent)=>{
                return myevent.id!==eventID
            })

            this.removeEventJoin(eventID)

            return this.setState({
                myevents: myeventsUpdated
            })
        }
        else{
            return alert("You were not signed up to begin with!");
        }
    }

    removeEventJoin=(eventID)=>{
        console.log("removing event from backend", eventID)
        fetch("http://localhost:3000/signups/cancel", {
            method: "PATCH",
            body: JSON.stringify({
                user_id: this.props.userinfo.id,
                event_id: eventID
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }

    handleAddAnnouncement=(event, annObj)=>{
        event.preventDefault();
        console.log("adding announcement");
        
        this.createAnn(annObj);
    }

    createAnn=(annObj)=>{
        fetch("http://localhost:3000/announcements",{
            method: "POST",
            body: JSON.stringify({
                title: annObj.title,
                bodytext: annObj.bodytext
            }),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response=>response.json())
        .then(newAnn=>{
            console.log("new ann created", newAnn)
            this.setState({
                announcements: [...this.state.announcements, newAnn.announcement]
            })
        })
    }

    deleteAnn=(event, annID)=>{
        if (this.state.announcements.some((annObj)=>{return annObj.id===annID})){
            let annUpdated = this.state.announcements.filter((annObj)=>{
                return annObj.id!==annID
            })
            
            //this.removeAnnBackend(annID)

            return this.setState({
                announcements: annUpdated
            })
        }
    }

    removeAnnBackend=(annID)=>{
        fetch("http://localhost:3000/announcements/" + `${annID}`, {
            method: 'DELETE'
        })
        .then(response=>response.json())
        .then(confirmation=>console.log("deleted ann", confirmation))
    }

    render(){
        return(
            <Container backgroundColor="grey-lightest" >
                <NavbarComp   userinfo={this.props.userinfo} handleLogout={this.props.handleLogout}  /> 
                <Columns>
                    <Columns.Column size="one-quarter"  >
                        <Eventlist   userinfo={this.props.userinfo}events={this.state.events} myevents={this.state.myevents} handleViewEvent={this.handleViewEvent}  />
                    </Columns.Column>
                    <Columns.Column>
                        { this.props.admin ?  
                            <Adminview 
                                userinfo={this.props.userinfo} 
                                myevents={this.state.myevents}
                                announcements={this.state.announcements}
                                handleAddAnnouncement={this.handleAddAnnouncement}
                                deleteAnn={this.deleteAnn}
                                handleAddEvent={this.handleAddEvent} 
                                displayEvent={this.state.displayEvent}
                                ingamename={this.state.ingamename}
                                handleSignupTextInput={this.handleSignupTextInput}
                                handleSignupSubmit={this.handleSignupSubmit} 
                                handleRemoveSignup={this.handleRemoveSignup}
                            /> 
                            : 
                            <Userview  
                                userinfo={this.props.userinfo}  
                                myevents={this.state.myevents}
                                announcements={this.state.announcements}
                                displayEvent={this.state.displayEvent}
                                ingamename={this.state.ingamename}
                                handleSignupTextInput={this.handleSignupTextInput}
                                handleSignupSubmit={this.handleSignupSubmit} 
                                handleRemoveSignup={this.handleRemoveSignup}
                            /> 
                        } 
                    </Columns.Column>
                </Columns>
            </Container>
        )
    }
}
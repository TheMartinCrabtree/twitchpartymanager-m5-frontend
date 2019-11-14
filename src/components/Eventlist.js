import React from 'react';
import EventlistItem from './EventlistItem.js';
import { Menu, Section, Heading, Title, Box } from  'react-bulma-components';


export default (props)=>{


    return(
        <Menu backgroundColor="primary" >
            <p >
                <Heading subtitle > Upcomming Events: </Heading>
            </p>
            <ul className="menu-list"  >
                {props.events.map((eventObj)=>{
                    let signedupCheck = false;
                    signedupCheck = props.myevents.some((ev)=>{
                        return ev.id === eventObj.id
                    });
                    
                    return(
                        <EventlistItem 
                            key={eventObj.id} 
                            event={eventObj} 
                            signedup={signedupCheck}
                            handleViewEvent={props.handleViewEvent}
                            className="menu-item"
                        />
                    )
                })}
            </ul>
        </Menu>
    )
}

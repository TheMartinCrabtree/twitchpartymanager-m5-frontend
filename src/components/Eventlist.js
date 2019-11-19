import React from 'react';
import EventlistItem from './EventlistItem.js';
import { Menu, Section, Heading, Title, Box } from  'react-bulma-components';


export default (props)=>{


    return(
        <Menu backgroundColor="grey-lighter" >
        <div style = {{
            padding: "10px",
            border: "1px solid #666699"
        }} >
            <p >
                <Heading textSize={5} > Upcomming Events: </Heading>
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
        </div>
        </Menu>
    )
}

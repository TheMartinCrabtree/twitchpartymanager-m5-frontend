import React from 'react';
import EventlistItem from './EventlistItem.js';


export default (props)=>{


    return(
        <nav >
            <ul >
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
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

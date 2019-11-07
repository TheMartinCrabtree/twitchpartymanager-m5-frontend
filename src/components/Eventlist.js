import React from 'react';
import EventlistItem from './EventlistItem.js';


export default (props)=>{
    return(
        <nav >
            <ul >
                {props.events.map((event)=>{
                    return <EventlistItem key={event.id} event={event} handleViewEvent={props.handleViewEvent} />
                })}
            </ul>
        </nav>
    )
}

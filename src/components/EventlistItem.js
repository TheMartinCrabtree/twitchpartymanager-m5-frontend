import  React from 'react';

export default (props)=>{
    return(
        <li onClick={(event)=>props.handleViewEvent(event, props.event)} >
            <h4>Event Name: {props.event.eventname} </h4>
            <div>Date/Time: {props.event.dateandtime} </div>
        </li>
    )
}
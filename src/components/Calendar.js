import React from 'react';
import { Card, Heading, Box, Button } from  'react-bulma-components';

export default (props)=>{
   
    return(
        <Box>
        <Card backgroundColor="white-ter" >
            <Card.Header backgroundColor="dark" >
                <Card.Header.Title textSize={4} textColor="white-ter" >My events:</Card.Header.Title>
            </Card.Header>
            <Card.Content >
                {props.myevents.map((eventObj)=>{
                    console.log("in calendar", props.handleRemoveSignup)
                    return(
                        <Box>
                            <ul>
                                <li><Heading subtitle >Event Name: {eventObj.eventname} </Heading>  </li>
                                <li> <label >Date/Time:</label> {eventObj.dateandtime} </li>
                                <li> <label >Server:</label> {eventObj.serverinfo} </li>
                                <li> <label >VOIP:</label> {eventObj.voip} </li>
                                <li> <label >Notes:</label> {eventObj.eventnote} </li>
                            </ul>
                            <Button color="info"  onClick={(event)=>props.handleRemoveSignup(event, eventObj.id)} >Remove me from this event.</Button>
                        </Box>
                    )
                })}

            </Card.Content>
        </Card>
        </Box>
    ) 
}
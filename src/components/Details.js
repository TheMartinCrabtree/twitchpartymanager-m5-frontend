import React from 'react';
import { Card,  Button, Box} from  'react-bulma-components';

export default (props)=>{
    // MAKE SIGNUP / REMOVE SIGNUP 
    return(
        <div >
            
                {Object.entries(props.displayEvent).length === 0 ? 
                    <Box>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title textSize={4}>Select an event to show details</Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <ul>
                                <li><label >Event Name:</label>  </li>
                                <li> <label >Date/Time:</label> </li>
                                <li> <label >Server:</label> </li>
                                <li> <label >VOIP:</label> </li>
                                <li> <label >Notes:</label>  </li>
                            </ul>

                        </Card.Content>
                    </Card>
                    </Box>
                    :
                    
                    <Box > 
                        <Card>
                            <Card.Header>
                                <Card.Header.Title textSize={4}>Event Details</Card.Header.Title>
                            </Card.Header>
                            <Card.Content>
                                <ul>
                                    <li><strong><label  >Event Name:</label> {props.displayEvent.eventname} </strong> </li>
                                    <li> <label >Date/Time:</label> {props.displayEvent.dateandtime} </li>
                                    <li> <label >Server:</label> {props.displayEvent.serverinfo} </li>
                                    <li> <label >VOIP:</label> {props.displayEvent.voip} </li>
                                    <li> <label >Notes:</label> {props.displayEvent.eventnote} </li>
                                </ul>
                            </Card.Content>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Header.Title textSize={5}>Sign up:</Card.Header.Title>
                        </Card.Header>
                        <Card.Content>
                            <form onSubmit={(event)=>props.handleSignupSubmit(event, props.displayEvent)} >
                                <label>
                                    IGN(in game name):
                                    <input 
                                        name="ingamename" 
                                        type="text" 
                                        defaultValue={props.ingamename}
                                        onChange={(event)=>props.handleSignupTextInput(event)}  />
                                </label>
                                <Button color="info" type="submit" value="Sign me up!" > Sign me up! </Button>
                            </form>
                            <Button color="info"  onClick={(event)=>props.handleRemoveSignup(event, props.displayEvent.id)} >Remove me from the sign up list.</Button>

                        </Card.Content>
                    </Card>

                    </Box> 
                    
                }
        </div>
    ) 
}
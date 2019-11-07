import React from 'react';

export default (props)=>{
    return(
        <section >
            
                {Object.entries(props.displayEvent).length === 0 ? 
                    <> </> 
                    :
                    <div > 
                    <h4>Event Details</h4>
                    <ul>
                        <li><label >Event Name:</label> {props.displayEvent.eventname} </li>
                        <li> <label >Date/Time:</label> {props.displayEvent.dateandtime} </li>
                        <li> <label >Server:</label> {props.displayEvent.serverinfo} </li>
                        <li> <label >VOIP:</label> {props.displayEvent.voip} </li>
                        <li> <label >Notes:</label> {props.displayEvent.eventnote} </li>
                    </ul>
                    <form onSubmit={(event)=>props.handleSignupSubmit(event, props.displayEvent)} >
                        <label><h4>Sign up:</h4></label>
                        <label>
                            IGN(in game name):
                            <input 
                                name="ingamename" 
                                type="text" 
                                defaultValue={props.ingamename}
                                onChange={(event)=>props.handleSignupTextInput(event)}  />
                        </label>
                        <input type="submit" value="Sign me up!" />
                    </form>
                    </div> 
                    
                }
        </section>
    ) 
}
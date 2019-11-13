import  React from 'react';
import { Card } from  'react-bulma-components';

export default (props)=>{
    return(
        <li onClick={(event)=>props.handleViewEvent(event, props.event)} >
            <Card backgroundColor="light" >
                <div className="card-header">
                    <h4 className="card-header-title">
                        Event Name: {props.event.eventname} 
                    </h4>
                </div>
                
                <div>Date/Time: {props.event.dateandtime} </div>
                {props.signedup ? 
                    <div ><font color="red">Signed-up</font></div>
                    :
                    <> </>
                }

            </Card>
            
        </li>
    )
}
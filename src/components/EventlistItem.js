import  React from 'react';
import { Card } from  'react-bulma-components';

export default (props)=>{
    return(
        <li onClick={(event)=>props.handleViewEvent(event, props.event)} >
            
            <Card 
                
                style={ {
                    borderRadius: "10px",
                    background: "#9933ff",
                    border: "2px solid #6600cc",
                    padding: "5px",
                    color: "#FFFFFF"
                }  }  
            >
                <div className="card-header">
                    <h4 className="card-header-title"  >
                        <font color="white"> 
                            Event Name: {props.event.eventname} 
                        </font>
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
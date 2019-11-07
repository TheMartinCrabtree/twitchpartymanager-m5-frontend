import  React from 'react';
import Menu from './components/Menu.js';

export default(props)=>{
    return (
        <div > 
            Userview 
            <Menu displayEvent={props.displayEvent} />
        </div>
    )
}
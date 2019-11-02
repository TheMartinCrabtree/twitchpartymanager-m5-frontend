import  React from 'react';
import Announcement from './Announcement.js';
import Calendar from './Calendar.js';
import Details from './Details'

export default class Menu extends React.Component{

    render(){
        return(
            <div > 
                this is the main menu with home, calendar, details
                <nav>
                 <span>Announcements </span>
                 <span>Calendar </span>
                 <span>Details </span>
                </nav>
                <>
                    display home, calendar, details here
                    <Announcement  />
                    <Calendar  />
                    <Details  />
                </>
            </div>
        )
    }

}
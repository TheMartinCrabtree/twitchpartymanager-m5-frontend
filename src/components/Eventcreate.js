import React from 'react';

export default class Eventcreate extends React.Component {
    state={
        eventname: "",
        dateandtime: "2019-11-25 06:45:00",
        serverinfo: "",
        voip: "",
        eventnote: ""
    }

    

    handleFormInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    render(){
        // DATE NEEDS TO BE UPDATED TO A DROPDOWN CALENDAR SELECTION THAT FORMATS TO DATE/TIME DATATYPE IN RAILS
        // YYYY-MM-DD HH:MM:SS
        return(
            <div>
                <h2>Create An Event (admin only) </h2>
                <form onSubmit={async(event)=>{
                        this.props.handleAddEvent(event, this.state);
                        this.setState({
                            eventname: "",
                            dateandtime: "2019-11-25 06:45:00",
                            serverinfo: "",
                            voip: "",
                            eventnote: ""
                        })
                }}>
                    <label>
                        Event Name:
                        <input name="eventname" onChange={this.handleFormInput}  type="text" value={this.state.eventname} />
                    </label>
                    <label>
                        Date:
                        <input name="dateandtime"   type="text" value={this.state.dateandtime} />
                    </label>
                    <label>
                        Server Info:
                        <input name="serverinfo" onChange={this.handleFormInput}  type="text" value={this.state.serverinfo} />
                    </label>
                    <label>
                        VOIP Info:
                        <input name="voip" onChange={this.handleFormInput}  type="text" value={this.state.voip} />
                    </label>
                    <label>
                        Notes:
                        <input name="eventnote" onChange={this.handleFormInput}  type="text" value={this.state.eventnote} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        ) 
    }
    
}
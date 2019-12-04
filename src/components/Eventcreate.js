import React from 'react';
import { Button, Section,  Modal, Content  } from  'react-bulma-components';

export default class Eventcreate extends React.Component {
    state={
        eventname: "",
        dateandtime: "2019-11-25 06:45:00",
        serverinfo: "",
        voip: "",
        eventnote: "",
        show: false
    }

    

    handleFormInput=(event)=>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    open=()=>{  this.setState({ show: true }) }

    close=()=>{ 
        this.setState({ show: false }); 
    }
    
    render(){
        // DATE NEEDS TO BE UPDATED TO A DROPDOWN CALENDAR SELECTION THAT FORMATS TO DATE/TIME DATATYPE IN RAILS
        // YYYY-MM-DD HH:MM:SS
        return(
            <div>
                <Button onClick={this.open} color="info" > Add an event</Button>
                <Modal 
                    show={this.state.show} 
                    modal={{closeOnBlur: true, showClose: false }}
                    onRequestClose={this.close}
                    onClose={ this.close}  >
                    
                        <Modal.Card>
                            <Modal.Card.Head onClose={this.close} >
                                <Modal.Card.Title>Create an event:</Modal.Card.Title>
                                
                            </Modal.Card.Head>
                            <Modal.Card.Body >
                                <Content>
                                    <form onSubmit={async(event)=>{
                                        this.props.handleAddEvent(event, this.state);
                                        this.setState({
                                            eventname: "",
                                            dateandtime: "2019-11-25 06:45:00",
                                            serverinfo: "",
                                            voip: "",
                                            eventnote: "",
                                            show: false
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
                                        <Section>
                                            <Button type="submit" color="info"  >Submit</Button>
                                        </Section>
                                    </form>
                                </Content>
                            </Modal.Card.Body>
                        </Modal.Card>  
                </Modal>
            </div>
        ) 
    }
    
}
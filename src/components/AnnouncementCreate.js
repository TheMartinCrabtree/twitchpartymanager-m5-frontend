import React from 'react';
import { Button, Section, Modal, Content  } from  'react-bulma-components';


export default class AnnouncementCreate extends React.Component{
    state={
        title: "",
        bodytext: "",
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
        return(
            <div>
                <Button onClick={this.open} color="info" > Add an announcement</Button>
                <Modal 
                    show={this.state.show} 
                    modal={{closeOnBlur: true, showClose: false }}
                    onRequestClose={this.close}
                    onClose={ this.close}  >
                    
                        <Modal.Card>
                            <Modal.Card.Head onClose={this.close} >
                                <Modal.Card.Title>Create an announcement:</Modal.Card.Title>
                                
                            </Modal.Card.Head>
                            <Modal.Card.Body >
                                <Content>
                                
                                    <form onSubmit={async(event)=>{
                                        
                                        this.props.handleAddAnnouncement(event, this.state);
                                        this.setState({
                                            title: "",
                                            bodytext: "",
                                            show: false
                                        })
                                    }}>
                                        <label>
                                            Title:
                                            <input name="title" onChange={this.handleFormInput}  type="text" value={this.state.title} />
                                        </label>
                                        
                                        <label>
                                            Message:
                                            <input name="bodytext" onChange={this.handleFormInput}  type="text" value={this.state.bodytext} />
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
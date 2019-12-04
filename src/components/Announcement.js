import React from 'react';
import {  Button, Heading, Card, Content, Box} from  'react-bulma-components';

export default (props)=>{
    // MAP THROUGH  announcements={props.announcements}
    // { !props.deleteAnn ? <> </> :
    // <Button color="info" onClick={(event)=>props.deleteAnn(event, annObj.id)} >Remove Announcement</Button> }

    return(
        <Box >
            <Card backgroundColor="white-ter" >
                <Card.Header textSize={4} backgroundColor="dark">
                    <Card.Header.Title textColor="white-ter" >Announcements</Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    
                    <Content>
                        {props.announcements.map((annObj)=>{
                            return(
                                <Box key={annObj.id}>
                                    <Heading subtitle textSize={5}  > {annObj.title} </Heading>
                                    <Content>
                                        {annObj.bodytext}
                                    </Content>
                                    { !props.deleteAnn ? <> </> :
                                    <Button color="info" onClick={(event)=>props.deleteAnn(event, annObj.id)} >Remove Announcement</Button> }
                                </Box>
                            )
                        })}
                    </Content>
                </Card.Content>
            </Card>
        </Box>
    ) 
}
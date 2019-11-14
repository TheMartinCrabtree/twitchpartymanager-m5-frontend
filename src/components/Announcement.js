import React from 'react';
import { Container, Section, Heading, Card, Content, Box} from  'react-bulma-components';

export default (props)=>{
    // MAP THROUGH  announcements={props.announcements}

    return(
        <Box >
            <Card backgroundColor="white-ter" >
                <Card.Header textSize={4} backgroundColor="dark">
                    <Card.Header.Title textColor="white-ter" >Announcements</Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    <Heading subtitle>Card Heading</Heading>
                    <Content>
                        This is where the announcement content goes.
                    </Content>
                </Card.Content>
            </Card>
        </Box>
    ) 
}
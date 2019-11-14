import React from 'react';
import { Container, Section, Heading, Card, Content} from  'react-bulma-components';

export default ()=>{
    return(
        <div >
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
        </div>
    ) 
}
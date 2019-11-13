import React from 'react';
import { Container, Section, Heading, Card, Content} from  'react-bulma-components';

export default ()=>{
    return(
        <Section >
            <Card backgroundColor="white-ter" >
                <Card.Header>
                    <Card.Header.Title>Announcements</Card.Header.Title>
                </Card.Header>
                <Card.Content>
                    <Heading subtitle>Card Heading</Heading>
                    <Content>
                        This is where the announcement content goes.
                    </Content>
                </Card.Content>
            </Card>
        </Section>
    ) 
}
import React from 'react';
import { Container, Section, Heading, Card, Content} from  'react-bulma-components';

export default ()=>{
    return(
        <Section>
            <Heading>Announcements</Heading>
            <Card >
                <Card.Image src="" alt="temp card image" />
                <Card.Content>
                    <Heading>Card Heading</Heading>
                    <Content>
                        This is where the announcement content goes.
                    </Content>
                </Card.Content>
            </Card>
        </Section>
    ) 
}
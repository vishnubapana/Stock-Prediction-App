import React from 'react'
import {
    Card, CardTitle, CardText, CardDeck,
    CardBody
  } from 'reactstrap';
  
function Features() {
    return (
        <div>
            <h1>Features of this Application</h1>
            
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4">Guess Prices</CardTitle>
                        <CardText tag="h6">Get predictions on future stock prices so you can make more informed buying decisions.</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4">Get Stock Information</CardTitle>
                        <CardText tag="h6">Get the latest information on stocks, including prices and changes.</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4">Get Current News</CardTitle>
                        <CardText tag="h6">Get the current news on things like the weather and company updates.</CardText>
                    </CardBody>
                </Card>
            </CardDeck>
            
        </div>
    );
    
}
export default Features
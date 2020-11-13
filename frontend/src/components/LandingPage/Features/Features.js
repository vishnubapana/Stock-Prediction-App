import React from 'react'
import {
    Card, CardTitle, CardText, CardDeck,
    CardBody, CardSubtitle
  } from 'reactstrap';
  
function Features() {
    return (
        <div>
            <h1 className="text-center">Features of our Application</h1>
            
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4" className='text-center'>Guess Future Stock Prices</CardTitle>
                        <CardSubtitle tag="h6" className='mb-2 text-muted text-center'>Less uncertainty</CardSubtitle>
                        <CardText tag="h6">Stocks are unpredicatble and always fluctuating. That's why our website provides all the latest predictions on future stock prices so you can makae the most informed buying decisions.</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4" className='text-center'>Get Stock Information</CardTitle>
                        <CardSubtitle tag="h6" className='mb-2 text-muted text-center'>All the data you need</CardSubtitle>
                        <CardText tag="h6">Get all the information you need about current stocks, including the stock price and price changes, in an clear and easy to read format.</CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle tag="h4" className='text-center'>Get Current News</CardTitle>
                        <CardSubtitle tag="h6" className='mb-2 text-muted text-center'>Stay informed</CardSubtitle>
                        <CardText tag="h6">Our website provides the latest news on important developments, including weather changes, company updates, and current events.</CardText>
                    </CardBody>
                </Card>
            </CardDeck>

        </div>
    );

}

export default Features
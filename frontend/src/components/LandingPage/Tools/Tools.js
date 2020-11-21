import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardDeck
  } from 'reactstrap';
import "./Tools.css";
export default function Tools(){
    return(
        <div>
            <p className="text-center">Tools used in this project: </p>
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardImg topWidth="50%" src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg"></CardImg>
                        <CardTitle className="text-center">React</CardTitle>
                        <CardSubtitle className="text-center">Frontend JavaScript Library</CardSubtitle>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardImg topWidth="50%" src="https://repository-images.githubusercontent.com/52071471/f1227d00-96bf-11e9-859f-3c713604f9d6"></CardImg>
                        <CardTitle className="text-center">Reactstrap</CardTitle>
                        <CardSubtitle className="text-center">CSS Framework</CardSubtitle>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardImg topWidth="50%" src="https://www.abeautifulsite.net/uploads/2016/04/nodejs.png?width=600&key=e29b3acd7da48dbe62199ba284591dc6e8abd8cb9ce286f5cf89b53a494a9b39"></CardImg>
                        <CardTitle className="text-center">Node.js</CardTitle>
                        <CardSubtitle className="text-center">JavaScript Runtime Environment</CardSubtitle>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    )
}
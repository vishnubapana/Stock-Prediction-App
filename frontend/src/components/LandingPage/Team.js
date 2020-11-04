import React from 'react';
import {
  Card, CardTitle, CardText, CardGroup, CardBody
} from 'reactstrap';

const Team = (props) => {
  return (
    <CardGroup>
      <Card>
        <CardBody>
          <CardTitle>Vishnu Bapanapalli</CardTitle>
          <CardText align='left'>Computer Science
          <br/>
            <a href='https://github.com/vishnubapana'>github</a>
          <br/>
            <CardText align='left'>Graduted with a Bachelors in Computer Engineering, 
            and currently persuing a Masters in Computer Science with a focus in 
            Intelligent Systems and Data Science.</CardText>
            </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Damian Ozuna</CardTitle>
          <CardText align='left'>Computer Science</CardText>
          <br/>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Joshua Durana</CardTitle>
          <CardText align='left'>Computer Science</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Kenny Ngo</CardTitle>
          <CardText align='left'>Computer Science</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Ryan Dimaranan</CardTitle>
          <CardText align='left'>Computer Science</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Team;
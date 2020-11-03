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
          <CardText align='left'>Major: Computer Science</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Damian Ozuna</CardTitle>
          <CardText align='left'>Major: Computer Science</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Joshua Durana</CardTitle>
          <CardText align='left'>Major: Computer Science</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Kenny Ngo</CardTitle>
          <CardText align='left'>Major: Computer Science</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Ryan Dimaranan</CardTitle>
          <CardText align='left'>Major: Computer Science</CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Team;
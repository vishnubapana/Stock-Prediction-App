import React from 'react';
import {
  Card, CardTitle, CardText, CardGroup, CardBody, CardLink
} from 'reactstrap';

function Team(props) {
  return (
    <div>
      <h1> Meet the Team Members</h1>
      <CardGroup>
        <Card>
          <CardBody>
            <CardTitle>Vishnu Bapanapalli</CardTitle>
            <CardText align='left'>Computer Science
            <br/>
            <CardLink href='https://github.com/vishnubapana'>github</CardLink>
            <br/>
                Graduated with a Bachelors in Computer Engineering and 
                currently pursuing a Masters in Computer Science with a focus in 
                Intelligent Systems and Data Science.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>Damian Ozuna</CardTitle>
            <CardText align='left'>Computer Science
            <br/>
            <CardLink href ="https://github.com/DamianOzuna">github</CardLink>
            <br/>
            I'm a 3rd year CS student. In my free time I enjoy gaming, swimming, and watching movies.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
          <CardTitle>Joshua Durana</CardTitle>
            <CardText align='left'>Computer Science
            <br/>
            <CardLink href='https://github.com/PretaxEnd9716'>github</CardLink>
            <br/>
            A computer science sophomore with interests in machine learning and computer vision.
            </CardText>
          </CardBody>
        </Card>
        <Card>
        <CardBody>
          <CardTitle>Kenny Ngo</CardTitle>
            <CardText align='left'>Computer Science
            <br/>
            <CardLink href='https://github.com/kNgo8249'>github</CardLink>
            <br/>
            Junior CS major with career interests in cybersecurity and networks.
            </CardText>
          </CardBody>
        </Card>
        <Card>
        <CardBody>
            <CardTitle>Ryan Dimaranan</CardTitle>
            <CardText align='left'>Computer Science
            <br/>
            <CardLink href='https://github.com/ryannd'>github</CardLink>
            <br/>
            Sophomore Computer Science major with career interests in web development and machine learning.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Team;
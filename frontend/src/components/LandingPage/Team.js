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
          <CardText align='left'>Graduated with a Bachelors in Computer Engineering and 
              currently pursuing a Masters in Computer Science with a focus in 
              Intelligent Systems and Data Science.</CardText>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Damian Ozuna</CardTitle>
          <CardText align='left'>Computer Science
          <br/>
          <a href ="https://github.com/DamianOzuna">github</a>
          <br/>
          <CardText align='left'>I'm a 3rd year CS student. In my free time I enjoy gaming, swimming, and watching movies.</CardText>
          </CardText>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
        <CardTitle>Joshua Durana</CardTitle>
          <CardText align='left'>Computer Science
          <br/>
          <a href='https://github.com/PretaxEnd9716'>github</a>
          <br/>
          <CardText align='left'>A computer science sophomore with interests in machine learning and computer vision.</CardText>
          </CardText>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
        <CardTitle>Kenny Ngo</CardTitle>
          <CardText align='left'>Computer Science
          <br/>
          <a href='https://github.com/kNgo8249'>github</a>
          <br/>
          <CardText align='left'>Junior CS major with career interests in cybersecurity and networks.</CardText>
          </CardText>
        </CardBody>
      </Card>
      <Card>
      <CardBody>
          <CardTitle>Ryan Dimaranan</CardTitle>
          <CardText align='left'>Computer Science
          <br/>
          <a href='https://github.com/ryannd'>github</a>
          <br/>
          <CardText align='left'>Sophomore Computer Science major with career interests in web development and machine learning.</CardText>
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  );
};

export default Team;
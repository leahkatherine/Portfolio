import React from "react";
import "../../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">About Me</h3>
            <br />
            <br />
            <p className="aboutdetails">
              I'm pleased to share that in 2023, I switched my career out of
              Tourism and Hospitality, and into my focus on Web Development. I
              completed a full stack bootcamp course with NuCamp in October, and
              I am now looking for a frontend position. Although my backend
              skills currently limited, I am actively learning with postgreSQL,
              and have been working on nx projects to help reinforce the
              structure of an enterprise. I am a quick learner, and I truely
              believe theres a solution to any problem if you look hard enough.
              <br />
              As a Junior Developer, let me show you have converted my drive for
              success from my previous career, into a passion and love for
              challenges and excellence with software engineering. and how I can
              be a valuable asset to your team.
            </p>
            <div>
              <Row>
                <br />
                <ul className="skilllist">
                  <Col md={7}>
                    <li>HTML/CSS/JavaScript</li>
                    <li>Bootsrap</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Node.js</li>
                  </Col>
                  <Col md={5}>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Docker</li>
                    <li>Experience with Google Cloud</li>
                    <li>Learning: Building an Nx monorepo with TypeScript</li>
                  </Col>
                </ul>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;

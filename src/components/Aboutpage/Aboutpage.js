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
              A little about me, since your here! I have been in the
              service/customer service industry since I graduated high school in
              2015. All the while, I have been searching for my next thing, my
              new passion. I tried feeding my drive to learn & strong curiosity,
              with climbing the corporate ladder within the hospitality industry
              from Server, to the highest level of management within the
              establishment and field, to where I left off: planning upscale
              hospitality events in a leadership position. I'm pleased to share that in 2023, I switched my career to full stack web development.
               I completed a full stack bootcamp course with
              NuCamp in October, and I am now looking to get my foot in the door
              with a company that will allow me to grow and learn even more. As a Junior Developer, I
              am looking for full time, partime postiions, and internships. I am
              open to all opportunities including negotiating irregular hours. 
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
                  <li>Experience with Git/Github</li>
                  <li>Experience with Google Cloud</li>
                  <li>Learning: Next.js & TypeScript</li>
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

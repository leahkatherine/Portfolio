import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import AskLogo from '../../Assets/AskLogo.png'

function Projectlist() {
  return (
    <div className="projectbackground" style={{height:'100%'}}>
      <Container className="project-section" style={{height: '100%', display: 'flex'}} >
          <Row style={{ paddingBottom: "10px", height: '100%'}}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={AskLogo}
                title="Dashboard Panel"
                description="This app is deployed using google firebase. Ask a Local is a an original design and concept, to hopefully become a realistic company in the future."
                ghLink="https://ask-a-local-394303.web.app"
              />
            </Col>

            {/* <Col md={5} className="project-card">

            </Col>
            <Col md={5} className="project-card">

            </Col>
            <Col md={4} className="project-card">

            </Col>
            <Col md={4} className="project-card">

            </Col> */}
            
          </Row>
      </Container>
    </div>
  )
}
export default Projectlist
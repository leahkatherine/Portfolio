import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'



function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>A little about me, if you were asking! 

I have been in the service/customer service industry since I graduated high school in 2015. All the while, I have been searching for my next thing, my new passion. I tried feeding my drive to learn & strong curiosity, with climbing the corporate ladder within the hospitality industry from Server, to the highest level of management within the establishment and field, to where I left off: planning upscale hospitality events in a leadership position. I’m excited to share that I’ve officially taken the leap into new beginnings, as I am now learning to code full time! I am dedicating 7-8 hours a day to learn and grow every day.

I know my worth, and I'm looking to get make a living in an industry that will push me to challenge myself, and allow me to move up even further up with a salary I deserve for my fantastic work ethic, creativity, and problem-solving skills. I'm looking to take these learned skills at NuCamp, and move to bigger and better things for my partner and I, and hopefully getting to travel the world with him too, along the way. 

Strengths: The ability to not give up or fold when a complicated or high stress situation arises. I'm usually thriving in chaos & challenge, and I have an open mind.  

Weaknesses: My inability to ask for help, always thinking I can solve everything on my own.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML</li>
                                    <li>JavaScript</li>
                                    <li>jQuery</li>
                                    <li>Bootsrap</li>
                                </Col>
                                <Col md={5}>
                                    <li>React</li>
                                    <li>Git/Github</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className='headShot'>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage
import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'
import Text from '../Homepage/Text'


function Home() {
  return (
    <div className='homepagebackground'>
      <Col md={7} className='text-center'>
        <div className='headShot'></div> {/* This will display your logo */}
        <h2 className='headtext'>
          Hello <span className='wave'>👋 </span>
        </h2>
        <h2 className='nametext'>I'm Leah Anestos</h2>
        <span></span>
        <Text />
      </Col>
    </div>
  );
}

export default Home;
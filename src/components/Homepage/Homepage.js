import React from 'react'
import '../../pages/style.css';
import {Col } from 'reactstrap';
import Text from '../Homepage/Text';
import headShot from '../../Assets/headShot.png';
import Footer from '../Footer/Footer';


function Home() {
  return (
    
    <div className='homepagebackground'>

      <Col md={7} className='text-center'>
        <div className='center-content'>
          <img src={headShot} alt='headshot'/>
          <Text />
        </div>
      </Col>
    </div>
  );
}

export default Home;
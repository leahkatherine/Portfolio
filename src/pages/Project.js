import React from 'react';
import Header from '../components/Header/Header';
import Projectlist from '../components/Projectlist/Projectlist';
import Footer from '../components/Footer/Footer';

function Project() {
  return (
    <div style={{height: '100%'}}>
      <Header />
      <Projectlist />
      <Footer/>
    </div>
  )
}

export default Project
import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Front End Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 150,
      }}
    />
  )
}

export default Text
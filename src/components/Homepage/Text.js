import React from "react";
import "../../pages/style.css";
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <div className="type-writer">
      <Typewriter
        options={{
          strings: ["Junior Web Developer"],
          autoStart: true,
          loop: true,
          deleteSpeed: 100,
        }}
      />
    </div>
  );
}

export default Text;

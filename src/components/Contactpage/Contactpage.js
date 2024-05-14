import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";
import LinktreeClone from "./LinkTreeClone";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <LinktreeClone />
        <span></span>
      </Container>
      <p className="copyright">
        © Copyright 2024
        <hr />
        Built by <span>Leah Anestos</span>
      </p>
    </div>
  );
}

export default Contactpage;

import React from "react";
import "../../pages/style.css";
import { Container } from "react-bootstrap";
import LinktreeClone from "./LinkTreeClone";
import ContactModal from "./ContactModal";


function Contactpage() {
  return (
    
    <div className="contactbackground">
      <ContactModal/>
      <Container>
      

        <LinktreeClone/>
        <span></span>
        <p className="copyright">
          © Copyright 2023
          <hr />
           Built by <span>Leah Anestos</span>
        </p>
      </Container>
    </div>
  );
}

export default Contactpage;

import React, {Component} from "react";
import Modal from "../Modal.js";



class ContactModal extends Component {
  constructor(){
    super();
    this.state = {
      show: true
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <main>
        
        <div className="modal">
        </div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          
        </Modal>
        <button type="button" onClick={this.showModal}>
          
        </button>
      </main>
    );
  }
}

  
  export default ContactModal;
  


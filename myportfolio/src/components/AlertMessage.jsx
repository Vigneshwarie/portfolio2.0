import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../assets/styles/Modal.css';

const AlertMessage = ({ show, message, onClose }) => {
  return (
     <Modal show={show} onHide={onClose} aria-labelledby="" centered >
          <Modal.Body id="" className="popup-box">{message}</Modal.Body>
          <Modal.Footer className="popup-box">
               <Button className="btn" onClick={onClose}>Close</Button>
          </Modal.Footer>
     </Modal>
     );
};

export default AlertMessage;

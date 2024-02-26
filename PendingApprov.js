import React, { useState } from "react";
import "./PendingApprov.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import grup from "./Group 39568.png";

const PendingApprov = () => {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <Button onClick={() => setLgShow(true)}>Large modal</Button>
      <Modal
      className="pendingModal"
      size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        centered
      >
        <Modal.Header
          closeButton
          className="new-Activity-header"
        ></Modal.Header>
        <Modal.Body>
          <div className="pending-main-first">
            <div className="pending-main-first-child1">
              <img src={grup} alt="" />
            </div>
            <div className="pending-main-first-child2">
                <h3>Pending Approval</h3>
                <p>Your Upload Will Be Approved By Admin Shortly</p>
                <div className="pending-main-first-child3">
                <button className="btn1">Home</button>
                <button className="btn2">Upload Design</button>
                </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PendingApprov;

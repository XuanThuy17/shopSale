import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import "./SearchModal.scss";

function SearchModal(props) {
  const { handleClose, search } = props;
  const [focus, setFocus] = useState(false);

  return (
    <>
        <Modal
          show={search}
          onHide={handleClose}
          dialogClassName="search-modal"
          contentClassName="search-modal-content"
        >
          <Modal.Body>
            <div className="search-container">
              <Form.Group className={`search-group ${focus ? "focus" : ""}`}>
                <input
                  className="search-input"
                  type="text"
                  onFocus={() => setFocus(true)}
                  onBlur={(e) => setFocus(e.target.value !== "")}
                  placeholder=""
                />
                <button className="search-btn">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button className="close-btn" onClick={() => handleClose()}>
                  <i className="fa-solid fa-x"></i>
                </button>
                <Form.Label>Search</Form.Label>
              </Form.Group>
            </div>
          </Modal.Body>
        </Modal>
    </>
  );
}

export default SearchModal;

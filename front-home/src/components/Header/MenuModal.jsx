import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MenuModal.scss";

function MenuModal(props) {
  const { handleClose, menu } = props;
  const [showSubmenu, setShowSubmenu] = useState(false);

  const handleShowSubmenu = () => setShowSubmenu(true);
  const handleHideSubmenu = () => setShowSubmenu(false);
  return (
    <>
      <Modal
        show={menu}
        onHide={handleClose}
        dialogClassName="menu-modal"
        contentClassName="menu-modal-content"
      >
        <Modal.Body>
          <div className="menu-container">
            <ul className="menu-list">
              <li>
                <Link to="">Home</Link>
              </li>
              <li onClick={handleShowSubmenu}>
              <Link to="">Shop</Link>
                
                <i class="fa-solid fa-arrow-right"></i>
              </li>
              <li>
                <Link to="">Reviews</Link>
              </li>
              <li>
                <Link to="">About Us</Link>
              </li>
              <li>
                <Link to="">Get In Touch</Link>
              </li>
              <li>
                <Link to="">Track Your Order</Link>
              </li>
            </ul>
            <div className="menu-footer">
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-tiktok"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal
        show={showSubmenu}
        onHide={handleHideSubmenu}
        dialogClassName="menu-modal"
        contentClassName="menu-modal-content"
      >
        <Modal.Body>
          <div className="menu-sub-container">
            <button onClick={handleHideSubmenu} className="back-btn">
              <i className="fa-solid fa-arrow-left"></i> Shop
            </button>
            <ul className="submenu">
              <li>All Products</li>
              <li>Top Sellers</li>
              <li>Football</li>
              <li>Baseball</li>
              <li>Formula 1</li>
              <li>Basketball</li>
              <li>Skeleton Series</li>
              <li>All About The Birds</li>
              <li>Funny</li>
            </ul>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MenuModal;

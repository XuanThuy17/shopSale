import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/logo/logo.png";
import SearchModal from "./SearchModal";
import MenuModal from "./MenuModal";

const Header = (props) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [submenu, setSubmenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const submenuRef = useRef(null);

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (submenu === true) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [submenu]);

  const handleClickOutside = (event) => {
    if (submenuRef.current && !submenuRef.current.contains(event.target)) {
      setSubmenu(false);
    }
  };

  const handleClose = () => {
    setSearch(false);
    setMenu(false);
  };
  const handleSearch = () => {
    setSearch(true);
  };
  const handleMenu = () => {
    setMenu(true);
  };

  const toggleSubmenu = () => {
    setSubmenu(!submenu);
  };

  return (
    <>
        <div className="notify">
          <span to="#">You're just in time! EVERY SHIRT is 25% OFF!</span>
        </div>
        <div
          className={`header-wrapper gradient ${
            showHeader ? "active" : "hidden"
          }`}
        >
          <div className="header">
            <div className="group-one">
              <div className="search">
                <i className="fa-solid fa-bars" onClick={() => handleMenu()}></i>
                <i
                  className="fa-solid fa-magnifying-glass"
                  onClick={() => handleSearch()}
                ></i>
              </div>
              <div className="logo">
                <Link to="/home">
                  <img src={Logo} alt="" width="300" />
                </Link>
              </div>
              <div className="cart">
                <i
                  class="fa-solid fa-magnifying-glass"
                  onClick={() => handleSearch()}
                ></i>
                <i className="fa-solid fa-bag-shopping"></i>
              </div>
            </div>
            <div className="group-two">
              <ul className="list-menu" role="list">
                <li>Home</li>
                <li onClick={toggleSubmenu} ref={submenuRef}>
                  Shop <i className="fa-solid fa-angle-up"></i>
                  {submenu && (
                    <ul className="submenu">
                      <li>All Products</li>
                      <li>Top Sellers</li>
                      <li>Football</li>
                      <li>Baseball</li>
                      <li>Formula 1</li>
                      <li>Baseketball</li>
                      <li>Skeleton Series</li>
                      <li>All About The Birds</li>
                      <li>Funny</li>
                    </ul>
                  )}
                </li>
                <li>Reviews</li>
                <li>About Us</li>
                <li>Get In Touch</li>
                <li>Track Your Order</li>
              </ul>
            </div>
          </div>
        </div>
        <SearchModal handleClose={handleClose} search={search} />
        <MenuModal handleClose={handleClose} menu={menu} />
      {/* <div className="test"></div> */}
    </>
  );
};

export default Header;

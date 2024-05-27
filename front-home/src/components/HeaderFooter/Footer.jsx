import React, { useState } from 'react';
import './Footer.scss';
import {
  Link
} from "react-router-dom";

const Footer = () => {
  const [isShow,setShow] = useState(false);
  const hideModal = (event) => {
    if (!event.target.closest('.form-follow')) {
      setShow(false);
    }
  };
  return (
    <>
        <div className='footer'>
      <div className="footer-top">
      <div className="container">
      <div className="footer-top-content">
          <h2>Want a free shirt instead?</h2>
          <div className="sub-heading">
            <p>Enter your email → Receive crazy offers</p>
            <div className='form'>
              <div className="input-group">
              <input type="text" id="email"/>
              <label htmlFor="email" className='email-focus'>Email</label>
              <button>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
              </div>
            </div>
          </div>
          <div className="footer-top-img">
            <img src="https://modernvintageapparel.co/cdn/shop/files/MODERN_VINTAGE_LOGO-03.png?v=1673958396&width=180" alt="" />
          </div>
        </div>
        <div className="footer-link">
            <button onClick={()=>setShow(true)}>Follow on Shop <i className="fa-regular fa-heart"></i></button>
            <ul className='d-flex align-items-center justify-content-between'>
              <li><Link to=""><i className="fa-brands fa-instagram"></i></Link></li>
              <li><Link to=""><i className="fa-brands fa-youtube"></i></Link></li>
              <li><Link to=""><i class="fa-brands fa-tiktok"></i></Link></li>
              <li><Link to=""><i class="fa-brands fa-twitter"></i></Link></li>
            </ul>
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <small><Link to="">© 2024,</Link></small>
          <small><Link to="">Modern Vintage Apparel</Link></small>
          <ul className='d-flex align-items-center justify-content-center'>
            <li><small><Link to="">Powered by Shopify</Link></small></li>
            <li><small><Link to="">Refund Policy</Link></small></li>
            <li><small><Link to="">Privacy Policy</Link></small></li>
            <li><small><Link to="">Terms of service</Link></small></li>
          </ul>
        </div>
        </div>
      </div>
    </div>
    {
      isShow === true &&
      <div className="modal-follow" onClick={hideModal}>
        <div className='form-follow'>
        <button className='close' onClick={()=>setShow(false)}><i class="fa-solid fa-xmark"></i></button>
        <div className="content-follow">
            <div className="content-img">
            <img src="https://cdn.shopify.com/s/files/1/0577/3197/3203/files/Jokic.png?v=1672831829" alt="" />
            <i class="fa-regular fa-heart"></i>
            </div>
            <div className="content-text">
              <h2>Follow on Shop</h2>
              <p>Stay in the know—never miss a sale, restock, or order update</p>
            </div>
        </div>  
        <div className='form'>
              <div className="input-group">
              <input type="text" id="email"/>
              <label htmlFor="email" className='email-focus'>Email</label>
              </div>
        </div>
        <button className='submit-button'>Continue</button>
        <div className="logo-follow">
        <shop-logo role="img" size="20" color="brand" label="Shop">
          <svg role="img" width="50" height="20" viewBox="0 0 65 26" aria-labelledby="shop-logo" fill="none" xmlns="http://www.w3.org/2000/svg">
          <title id="shop-logo">Shop</title>
          <path d="M12.5782 8.5748L9.35595 10.1981C8.61942 8.94227 7.6067 8.2992 6.19532 8.2992C4.66089 8.2992 3.89339 8.75853 3.89281 9.6772C3.89281 10.6574 5.02886 10.8715 7.5763 11.4227C10.1237 11.9739 13.0125 12.7703 13.0125 15.9241C13.0125 18.9869 10.6188 20.8243 6.65999 20.8243C3.46809 20.8243 1.10131 19.4766 0 17.0881L3.2223 15.496C3.89716 16.9693 5.0636 17.7311 6.65999 17.7311C8.31717 17.7311 9.14576 17.2718 9.14576 16.2916C9.14576 15.3114 8.0071 15.0973 5.45619 14.5461C2.90528 13.9949 0.027794 13.1985 0.027794 10.0447C0.027794 7.07373 2.3911 5.20607 6.19445 5.20607C9.17355 5.20607 11.4144 6.40033 12.5782 8.5748Z" fill="#5433EB"></path>
          <path d="M15.281 0H19.2711V6.98187C20.3133 5.84913 21.8176 5.20607 23.5365 5.20607C26.9742 5.20607 29.4295 7.83987 29.4295 11.5761V20.67H25.4394V11.5761C25.4394 9.8306 24.1505 8.54273 22.37 8.54273C20.5895 8.54273 19.2711 9.8592 19.2711 11.5761V20.67H15.281V0Z" fill="#5433EB"></path>
          <path d="M32.0378 6.30846C33.358 5.3898 35.2601 4.74846 37.2864 4.74846C42.6878 4.74846 46.6163 8.3928 46.6163 13.3848C46.6163 18.0388 43.2402 21.2853 38.544 21.2853C34.5235 21.2853 31.6391 18.5909 31.6391 14.9769C31.6391 12.5268 33.1156 10.7198 35.2001 10.0161L36.8877 12.8639C35.7525 13.3839 35.3243 14.1501 35.3243 15.0991C35.3243 16.6591 36.6445 17.7641 38.5466 17.7641C40.8795 17.7641 42.7209 15.9259 42.7209 13.4455C42.7209 10.5361 40.4192 8.33213 37.289 8.33213C36.0587 8.32254 34.8527 8.67394 33.8209 9.34266L32.0378 6.30846Z" fill="#5433EB"></path>
          <path d="M52.8152 18.9254V26H48.826V5.35947H52.7231V7.22714C53.9209 5.941 55.6084 5.20607 57.5114 5.20607C61.716 5.20607 65 8.60513 65 13.0156C65 17.4261 61.716 20.8243 57.5114 20.8243C55.6388 20.8243 54.0121 20.1197 52.8152 18.9254ZM61.0403 12.9844C61.0403 10.4425 59.2607 8.5748 56.8357 8.5748C54.442 8.5748 52.6311 10.4737 52.6311 12.9844C52.6311 15.4951 54.442 17.3949 56.8357 17.3949C59.2607 17.3949 61.0429 15.5263 61.0429 12.9844H61.0403Z" fill="#5433EB"></path>
          </svg>
        </shop-logo>
        </div>
        </div>
    </div>
    }
    </>
  );
};

export default Footer;

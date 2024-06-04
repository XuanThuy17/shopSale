import { useState } from "react";
import "./Checkout.scss";
import Footer from "./HeaderFooter/Footer";
import Header from "./HeaderFooter/HeaderPage";
import AddressModal from "./Modal/AddressModal";
const Checkout = () => {
  const [showAddress,setShowAddress] = useState(false);
  const handleCloseAddressModal = () => {
    setShowAddress(false);
  }

  const handleChange = () => {
    setShowAddress(true);
  }

  return (
    <>
    <Header/>
      <div className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Checkout</h2>
            </div>
            <div className="col-12 col-sm-6">
              <div className="info-check">
                <div className="row">
                  <div className="form-group col-12">
                        <h4>Infomation</h4>
                  </div>
                  <div className="form-group col-12">
                        <p><span>Fullname</span>: Cristiano Ronaldo</p>
                  </div>
                  <div className="form-group col-12">
                        <p><span>Email</span>: cr7@gmail.com</p>
                  </div>
                  <div className="form-group col-12">
                        <p><span>Phone</span>: 0922908349</p>
                  </div>
                  <div className="form-group col-12">
                        <p><span>Address</span>: Saudi Arabia</p>
                        <button className="btn-change" onClick={()=>handleChange()}>Change</button>
                  </div>
                  <div className="form-group col-12">
                        <button className="btn-order">Order</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="order-check">
                <div className="d-flex align-items-center justify-content-between">
                <h4>Total:</h4>
                <h4>2</h4>
                </div>
                <ul>
                    <li>
                        <div className="item-order">
                            <div className="image">
                                <img src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713" alt="" />
                            </div>
                            <div className="info">
                                <p>Motor City Dan - Unisex t-shirt</p>
                                <p>Size: <span>S</span> Color: <span>Black</span></p>
                                <p>2 x <span>$150000</span></p>
                            </div>
                            <div className="info">
                                <p><span>$300000</span></p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="item-order">
                            <div className="image">
                                <img src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713" alt="" />
                            </div>
                            <div className="info">
                                <p>Motor City Dan - Unisex t-shirt</p>
                                <p>Size: <span>S</span> Color: <span>Black</span></p>
                                <p>2 x <span>$150000</span></p>
                            </div>
                            <div className="info">
                                <p><span>$300000</span></p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="d-flex align-items-center justify-content-between">
                <h4>Subtotal:</h4>
                <h4>$600000</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer/>  
    <AddressModal
    showAddress={showAddress}
    handleCloseAddressModal={handleCloseAddressModal}
    />
    </>
  );
};
export default Checkout;

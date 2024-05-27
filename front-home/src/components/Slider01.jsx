import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import "./Slider.scss";
import { Link } from "react-router-dom";

const Slider01 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;
  return (
    <>
      <div className="list-slider">
        <div className="container">
          <h2 className="title-slider">Top Seller</h2>
          <p>
            Get 'em before they're gone...We can barely keep these ones stocked.
          </p>
        </div>
        <div className="slider-list">
          <Swiper
            slidesPerView={5}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            freeMode={true}
            modules={[Navigation, FreeMode]}
            className="mySwiper"
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
          >
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <span>Sale</span>
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link className="card">
                <div className="card-img">
                  <img
                    className="image-hover"
                    src="https://modernvintageapparel.co/cdn/shop/products/motor-city-dan-unisex-t-shirt-651688.jpg?v=1682339667&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                  <img
                    className="image-hide"
                    src="https://modernvintageapparel.co/cdn/shop/products/hakeem-olajuwon-unisex-t-shirt-711529.jpg?v=1687894250&width=713"
                    alt="Tiger Woods T-shirt"
                  />
                </div>
                <div className="card-text">
                  <h4>
                    <Link to="">Motor City Dan - Unisex t-shirt</Link>
                  </h4>
                  <span>$40.99</span>
                  <p>From $22.99 USD</p>
                  <button>Buy now</button>
                </div>
              </Link>
            </SwiperSlide>
            <div className="button-Atrrangment">
              <div className="button-swiper">
                <div className="swiper">
                  <div className="swiper-button-prev"></div>
                  <div className="count-slider">
                    {currentSlide}/{totalSlides}
                  </div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
              <Link tp="">View all</Link>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Slider01;

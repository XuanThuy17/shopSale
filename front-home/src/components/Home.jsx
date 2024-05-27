import React, { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Home.scss";
import { Link } from "react-router-dom";
import Slider01 from "./Slider01";


const Home = () => {
  const [isAuto, setIsAuto] = useState(true);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      if (isAuto) {
        swiperRef.current.swiper.autoplay.start();
      } else {
        swiperRef.current.swiper.autoplay.stop();
      }
    }
  }, [isAuto]);

  const handleToggleAutoplay = () => {
    setIsAuto(!isAuto);
  };

  return (
    <>
      <Header />
      <div className="index">
        <div className="banner">
          <Swiper
            ref={swiperRef}
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: isAuto === true ? false : true,
            }}
            loop={true}
            pagination={{
              clickable: true,
              el: ".swiper-pagination",
              type: "bullets",
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slider-item">
                <img
                  src="https://modernvintageapparel.co/cdn/shop/files/mockup-of-a-man-wearing-a-cool-oversized-t-shirt-m26207_1.png?v=1680077662&width=1500"
                  alt="Slide 1"
                />
                <div className="slider-item-btn">
                  <Link to="">Shop Football</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <img
                  src="https://modernvintageapparel.co/cdn/shop/files/mockup-of-a-couple-wearing-oversized-tees-with-customizable-sleeves-m26158_3.png?v=1682331043&width=1500"
                  alt="Slide 2"
                />
                <div className="slider-item-btn">
                  <Link to="">Shop Football</Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slider-item">
                <img
                  src="https://modernvintageapparel.co/cdn/shop/files/mockup-of-two-men-wearing-trendy-oversized-t-shirts-m26204_2.png?v=1687940612&width=1500"
                  alt="Slide 3"
                />
                <div className="slider-item-btn">
                  <Link to="">Shop Football</Link>
                </div>
              </div>
            </SwiperSlide>
            <div className="button-Atrrangment">
              <div className="button-swiper">
                <div className="swiper">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                  <div className="swiper-button-next"></div>
                </div>
              </div>
              <button className="" onClick={handleToggleAutoplay}>
                {isAuto ? (
                  <i className="fa-solid fa-pause"></i>
                ) : (
                  <i className="fa-solid fa-play"></i>
                )}
              </button>
            </div>
          </Swiper>
        </div>
        <Slider01/>
        <Slider01/>
        <Slider01/>
        <Slider01/>
        <Slider01/>
        <Slider01/>
      </div>
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // speed: 1000,
// autoplaySpeed: 4000,

};

function Hero() {
  return (
    <>
      <div className="hero">
        <Slider {...settings}>
          <div className="silder">
            <img
              src="https://images.unsplash.com/photo-1615873968403-89e068629265?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww"
              alt=""
            />
            <div class="card">
              <p class="subtitle">ALL FOR HOME SWEET HOME</p>
              <h1>Simply Delightful</h1>
              <div class="line"></div>
              <p class="desc">
                All4Home is a charming theme designed for all interior
                decoration and handicraft businesses.
              </p>
            </div>
          </div>

          <div className="silder">
            <img
              src="https://cdn.magicdecor.in/com/2024/06/19125028/White-Gold-Banana-Leaves-Foliage-Mural-Wallpaper-M.jpg"
              alt=""
            />
            <div class="card">
              <p class="subtitle">ALL FOR HOME SWEET HOME</p>
              <h1>Simply Delightful</h1>
              <div class="line"></div>
              <p class="desc">
                All4Home is a charming theme designed for all interior
                decoration and handicraft businesses.
              </p>
            </div>
          </div>

          <div className="silder">
            <img
              src="https://thumbs.dreamstime.com/b/delicate-arrangement-pink-white-dried-flowers-soft-fabric-background-creating-serene-calming-atmosphere-385922629.jpg"
              alt=""
            />
            <div class="card">
              <p class="subtitle">ALL FOR HOME SWEET HOME</p>
              <h1>Simply Delightful</h1>
              <div class="line"></div>
              <p class="desc">
                All4Home is a charming theme designed for all interior
                decoration and handicraft businesses.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Hero;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Service.css'
import { GrTime,GrAchievement,GrApple,GrCafeteria,GrCpu,GrInspect,GrTest } from "react-icons/gr";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      swipeToSlide: true,
      afterChange: function(index) {
        console.log(
          `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
        );
      }
    };
    return (
        <>
        <h2  className="need">What do you Need ? </h2>
      <div className="cerosel-maindiv">
       
        <Slider  {...settings}>
          <div className="cerosal" >
          <GrTime className="react-icon" />
          <button className="detail-btn" >Health Care</button>
          </div>
          <div className="cerosal" >
          <GrAchievement className="react-icon" />
          <button className="detail-btn" >Service</button>
          </div>
          <div className="cerosal" >
          <GrApple className="react-icon" />
          <button className="detail-btn" >Online Store</button>
          </div>
          <div className="cerosal" >
          <GrCafeteria className="react-icon" />
          <button className="detail-btn" >Restaurants</button>
          </div>
          <div className="cerosal" >
          <GrCpu className="react-icon" />
          <button className="detail-btn" >Repearing Center</button>
          </div>
          <div className="cerosal" >
          <GrInspect className="react-icon" />
          <button className="detail-btn" >Lens Shop</button>
          </div>
          <div className="cerosal" >
          <GrTest className="react-icon" />
          <button className="detail-btn" >Medical Shop</button>
          </div>
         
        </Slider>
      </div>
      </>
    );
  }
}

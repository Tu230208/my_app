'use client'

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
      <Image src="/pic1.jpg" alt="momleo" width={600} height={150} />
      </div>
      <div>
      <Image src="/pic2.jpg" alt="momleo" width={600} height={150} />
      </div>
    </Slider>
  );
}
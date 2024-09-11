"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImageSlider.css";
import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";

export default function ImageSlider() {
  const theme = useTheme();
  const result = clientSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <>
      <h1
        style={{
          color: theme.colors.secondary,
        }}
      >
        Client route {result}
      </h1>
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
          <div>
            <img src="http://picsum.photos/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
}

import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner() {
  return (
    <div className=" relative">
       
        <div  className=" absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="http://links.papareact.com/gi1" />
        </div>
        <div>
          {" "}
          <img loading="lazy" src="http://links.papareact.com/6ff" />
        </div>
        <div>
          {" "}
          <img loading="lazy" src="http://links.papareact.com/7ma" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

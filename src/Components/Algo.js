import React from 'react'
import EventCard from "./EventCard";
import "./Algo.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from 'react-lottie';
import algoanim from "../Lottie/algobox.json";

function Algo() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        variableWidth: true,
        slidesToScroll: 3
      };
      return (
          <div className="algo">
              <div className="algo__body">
                  <div className="algo__left">
                      <Lottie options={{ animationData:algoanim,}} />
                  </div>
                  <div className="algo__right">
                      <h1>Algorithm Toolbox</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at neque feugiat, sagittis nisi eu, posuere lacus. Pellentesque sed sem facilisis, tristique quam nec, mattis diam. Proin et nisi in odio laoreet cursus. Curabitur maximus hendrerit dolor, eget convallis libero eleifend eu. Duis ullamcorper sagittis sagittis. Duis iaculis egestas lorem sit amet tincidunt. Donec tincidunt sagittis auctor. Etiam in maximus ante. Suspendisse aliquet sollicitudin ipsum nec convallis. Vestibulum imperdiet sagittis luctus.

Suspendisse rutrum, felis sed tincidunt consectetur, nunc enim vehicula neque, eu luctus elit nulla id mi. Phasellus id felis urna. Mauris sodales scelerisque diam, quis consectetur leo sodales a. Curabitur pulvinar lorem eu nisi ultrices tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris fermentum libero ex, ac pharetra elit vehicula non. Donec dapibus varius nulla, vel pharetra dui. Proin interdum, quam quis pellentesque euismod, lorem justo sodales nisi, in semper enim odio ut sapien. Nulla lectus nibh, finibus vitae faucibus quis, iaculis et augue. Integer id risus et libero tincidunt egestas. Aenean a augue felis. Nam ultrices nisi urna, ac placerat nulla molestie ut. Curabitur fermentum tortor vel faucibus iaculis.</p>
                  </div>
              </div>
              <div className="algo__bottom">

                  <h1>Our Playlist</h1>

                <Slider {...settings}>
                <div>
                    <EventCard />
                </div>
                <div>
                <EventCard />
                </div>
                <div>
                <EventCard />
                </div>
                <div>
                <EventCard />
                </div>
                <div>
                <EventCard />
                </div>
                <div>
                <EventCard />
                </div>
                </Slider>
        </div>
        </div>
        
      );
    }
export default Algo

import React from 'react'
import EventCard from "./EventCard";
import "./Algo.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
                  <h1>heloooooooo</h1>
              </div>

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
      );
    }
export default Algo

import React from "react";
import EventCard from "./EventCard";
import "./Algo.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lottie from "react-lottie";
import algoanim from "../Lottie/algobox.json";
import { Link } from "react-router-dom";

function Algo() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 3,
  };
 
  return (
    <div className="algo">
      <div className="algo__body">
        <div className="algo__left">
          <Lottie options={{ animationData: algoanim }} />
        </div>
        <div className="algo__right">
          <h1>Algorithm Toolbox</h1>
          <p>
            In the C++ Standard Library, algorithms are components that perform
            algorithmic operations on containers and other sequences.[1] The C++
            standard provides some standard algorithms collected in the
            algorithm standard header.[2] A handful of algorithms are also in
            the numeric header. All algorithms are in the std namespace.
          </p>
        </div>
      </div>
      <div className="algo__bottom">
        <h1>Our Playlist</h1>

        <Slider {...settings}>
          <div className="train__select">
            <Link to="/LinearSearch">
            <EventCard  topic="Bank locker Robbery" name="Linear Search Algo" />
            </Link>
          </div>
          <div>
          <Link to="/BinarySearch">
            <EventCard topic="Precious gem Stolen" name="Binary Search Algo" />
            </Link>
          </div>
          <div>
            <EventCard topic="Precious gem Stolen" name="Binary Search Algo" />
          </div>
          <div>
            <EventCard topic="Precious gem Stolen" name="Binary Search Algo" />
          </div>
          <div>
            <EventCard topic="Precious gem Stolen" name="Binary Search Algo" />
          </div>
          <div>
            <EventCard topic="Precious gem Stolen" name="Binary Search Algo" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Algo;

import React from 'react';
import "./cardComponent.css";
import { Link } from 'react-router-dom'

import Tilt from "react-tilt"

function componentCard(props,{buttonContent}) {
    return (
      <div className="ComponentCard">
        <Tilt
      className="col-md-9 card__content Tilt"
      options={{ max: 5, scale: 1 }}
    >
      <div
        className="card__content__inner Tilt-inner"
        style={{ backgroundColor: props.color, scale: 1 }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-9 col-xs-12
           align-items-start">
            <div className="hackathon__title">{props.headline}</div>
            <div className="hackathon__duration"> {props.para}</div>
            <Link to="/Algorithm">
            <button className="buttonfx slideleft">Learn from Here »</button>
            </Link>
          </div>
          <img

          // src="https://dscwow.tech/images/card/graphics.png"
            // src="https://banner2.cleanpng.com/20180426/xue/kisspng-algorithms-data-structures-=-programs-data-struc-5ae173e12e69b4.6797280015247247051901.jpg"
            src={props.sideimage}

            className="card__graphics lazy"
            alt="CodeOffDuty Hackathon DSC WOW"
          />
        </div>
      </div>
    </Tilt>
    </div>
    )
}

export default componentCard;

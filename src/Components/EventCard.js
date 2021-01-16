import React from 'react'
import "./EventCard.css"

function EventCard({name,time,logo}) {
    return (
        <div className="event event__card__wrapper col-lg-4 col-md-9 col-xs-11">
        <img
          className="event__image"
          alt="logo"
          src="https://dscwow.tech/images/events/day2/4.png"
        />
  
        <div className="event__card__content">
        <div className="event__name">Algo tool box</div>  
        <button className="watch__btn">
        Lets Start
        </button>
        </div>
      </div>
    )
}

export default EventCard

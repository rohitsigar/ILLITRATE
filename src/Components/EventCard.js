import React from 'react'
import "./EventCard.css"

function EventCard({name,topic,startStory,storyimage}) {
    return (
        <div className="event event__card__wrapper col-lg-4 col-md-9 col-xs-11">
        <img
          className="event__image"
          alt="logo"
          src={storyimage}
        />
  
        <div className="event__card__content">
        <div className="event__topic">{topic}</div> 
        <div className="event__name">{name}</div> 
        <button className="watch__btn">
        Lets start
        </button>
        </div>
      </div>
    )
}

export default EventCard

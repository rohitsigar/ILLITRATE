  
import React from 'react'
import "./Card.css";
export default function Card(props) {

    return (
        <div className="card-container">
            <div className="message">
                <h2>{props.message}</h2>
            </div>
            <div className="message">
                <h2>{props.message2}</h2>
            </div>
            <div className="weight">
                <p>{props.weigth}</p>
            </div>
        </div>
    )
}
import React, { Component } from 'react'
import "./CardSlider.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

 const CardImages = [
     {
         name: 'CardImage 1',
         url: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
     },
     {
         name: 'CardImage 2',
         url: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
     },
     {
         name: 'CardImage 3',
         url: "https://images.unsplash.com/photo-1603380353725-f8a4d39cc41e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBwcm9ncmFtbWluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60"
     }
 ]

export class CardSlider extends Component {
    render() {

        const settings = {
            dots: true,
            fade: true,
            infinte: true,
            speed: 500,
            arrows: true,
            slidesToScroll: 1,
            className: "slides"
       }
   
        return (
            <div className="cardSlider">
                <Slider {...settings}>
                    {CardImages.map((images) => {
                        return(
                            <div className="algoImage">
                                <img className="pic" src={images.url} alt="slideImages"/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        );
    }
}


export default CardSlider;


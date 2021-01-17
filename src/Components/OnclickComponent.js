import React from "react";
import image1 from "../Assets/ABCD.jpg";

export class Button extends React.Component {

    
    handleId = (e) => {
    //   console.log(e.target.id);
      var id = e.currentTarget.id;
    }
  
    render() {
      return (
          <div>
       <button id="1" onClick={this.handleId} className=" drum" >
      <img src={image1} className="image" alt="/">
      </img>
    </button>
       <button id="2" onClick={this.handleId} className=" drum" >
      <img src={image1} className="image" alt="/">
      </img>
    </button>
    </div>
      );
    }
  }


// export function Algorithmone() {
    
// }



  
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "../css/Card.css";


const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };


  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="vertical"
    >
      <div className="card-front">
        <div className="title">{props.data.title}</div>
        <div className="sub-title">{props.data.subTitle}</div>
        <div className="front-content">{props.data.frontContent}</div>
        <div className="duration">{props.data.duration}</div>

        <button className="card-button" onClick={handleClick}>Know More...</button>
      </div>
      <div className="card-back">
      <div className="back-content">{props.data.backContent}</div>
        <button className="card-button" onClick={handleClick}>Back...</button>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
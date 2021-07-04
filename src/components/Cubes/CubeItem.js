import React, { useState } from 'react';
import { Square1 } from '../Squares/Squares';
import './CubeItem.css'


const CubeItem = (props) => {
  let [isActive, setActive] = useState(false);

  // Init cube click handler
  const cubeToggle = () => {
    if (isActive === false) {
      setActive(true);
      console.log(isActive);
    } else {
      setActive(false);
      console.log(isActive);
    }
  };

  // Create the cube item. Add inline styling to change element appearance on click events
  return (
    <div onClick={cubeToggle} className="cube-item" style={{flexBasis: `${isActive ? "100%" : "33%"}`}}>
      <div className={!isActive ? null : "cube-item__overlay"} style={{backgroundColor: `${isActive ? `${props.colour}` : 'black'}`, opacity: '0.07'}}></div>
      {/* <Square1 /> */}
      <img className='cube-item__image'
       src={props.imageUrl}
       alt={props.cubeTitle}
       style={{width: `${props.imageDimensions[0]}`, height: `${props.imageDimensions[1]}`, opacity: `${isActive ? "1" : '0.1'}`}} 
      />
      <div className="cube-item__heading" style={{display: `${isActive ? "block" : "none"}`}}>
        <h3 style={{display: `${isActive ? "block" : "none"}`}}>{props.cubeTitle}</h3>
      </div>
      <div className="cube-item__description" style={{display: `${isActive ? "block" : "none"}`}}>
        <h3 style={{display: `${isActive ? "block" : "none"}`}}>{props.descTitle}</h3>
        <p style={{display: `${isActive ? "block" : "none"}`}}>{props.descText}</p>
      </div>
    </div>
  );
};

export default CubeItem;
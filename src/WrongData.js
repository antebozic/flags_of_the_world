import React from 'react';
import './InfoData.css'

const WrongData = ({answer}) => {
    return(
    <div className="textWrapper">
    <div className="openingText">
      Incorrect!
    </div>
    <div className="infoText">
      {
      `Correct answer: ${answer}`
      }
    </div>
    </div>
    )
}

export default WrongData;



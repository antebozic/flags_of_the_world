import React from "react";
import "./InfoData.css";

const InfoData = props => {
const {capital, region, subregion, population, flag, answer, nativeName} = props;



let text = (<div className="textWrapper">
    <div className="openingText">
        Correct!
    </div>
    <div className="infoText">
        {
        `${answer} (${nativeName}) is situated in ${region} and is a part of ${subregion}. It has population of ${population} and the capital city is ${capital}.`
        }
    </div>
</div>);


if(answer === nativeName) {
  text = (<div className="textWrapper">
    <div className="openingText">
      Correct!
    </div>
    <div className="infoText">
      {
      `${answer} is situated in ${region} and is a part of ${subregion}. It has population of ${population} and the capital city is ${capital}.`
      }
    </div>
</div>);}

if (capital === undefined) {
    text = (<div className="textWrapper">
  <div className="openingText">
      Correct!
  </div>
  <div className="infoText">
      {
      `${answer} is situated in ${region} and is a part of ${subregion}. It has population of ${population}.`
      }
  </div>
</div>);}

return(
    <div>
        {text}
    </div>
)
}

export default InfoData;


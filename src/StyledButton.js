import React from 'react';
import './StyledButton.css';

const StyledButton = ({text, onClick, type, delay}) => {
let styleClasses = "btn-flag";
if(delay) {
  styleClasses = "btn-flag showUp"
}
return(

  <button className={styleClasses}
    type={type || 'button'}
    onClick={onClick}
  >
    {text}
  </button>
);


} 

export default StyledButton;
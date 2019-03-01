import React from 'react';
import './StyledButton.css';

const StyledButton = ({text, onClick, type}) => (
  <button className="btn-flag"
    type={type || 'button'}
    onClick={onClick}
  >
    {text}
  </button>
);

export default StyledButton;
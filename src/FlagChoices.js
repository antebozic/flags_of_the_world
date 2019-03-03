import React from 'react';
import StyledButton from './StyledButton';
import './FlagChoices.css';

const FlagChoices =  props => {
  let options = props.options || []
  const {handleChange, handleSubmit} = props;
  let inputs = options.map((opt, index) => (

    <label key={opt.id} className={`label${index}`}>
      <input type="radio"
             value={opt.id}
             checked={opt.checked}
             onChange={handleChange}
             name="flag-choice"
             className="radio-input" />
      <span className="radio-button"></span>
      {opt.name}
    </label>
  ));
console.log(props.options);
  return (
    <form className="flag-form" onSubmit={handleSubmit}>
      {inputs}
      <StyledButton text="GUESS FLAG" delay={false} type="submit"/>
    </form>
  );
}

export default FlagChoices;
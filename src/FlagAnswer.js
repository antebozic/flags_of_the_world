import React from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';
import InfoData from './InfoData';
import WrongData from './WrongData';


const FlagAnswer = (props) => {

    const { correct, answer, onNext, capital, region, subregion, population, flag , nativeName} = props;
    let bck = { backgroundImage: `` };
    if(correct) {
        bck = { backgroundImage: `radial-gradient( rgba(30,145,214,.88),rgba(88,173,221,.95)), url(${flag})` }
    }

    return (
    <div className='flag-answer' style={bck} >
    {correct ? 

        <InfoData answer={answer}
                  capital={capital}
                  region={region} 
                  subregion={subregion}
                  population={population}
                  flag={flag}
                  nativeName={nativeName}/>
    
    : 
      ( 
        <WrongData answer={answer} />)}
       
       
        <StyledButton text="NEXT" onClick={onNext}/>
        
    </div>
        )
    }

export default FlagAnswer;

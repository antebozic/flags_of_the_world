import React from 'react';
import './OnLoad.css';


const OnLoad = ({flags}) => {


    return(
        <div className="wrapper">
            <div className="textContainer">
            Flags of the World
            </div>

            <div className="line1">
                <div className="flag" style={{ backgroundImage: `url(${flags[0]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[1]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[2]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[3]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[4]})` }}>
                </div>
            </div>

            <div className="line2">
                {/* <div className="flag" style={{ backgroundImage: `url(${flags[5]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[6]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[7]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[8]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[9]})` }}>
                </div> */}
            </div>

            <div className="line3">
                <div className="flag" style={{ backgroundImage: `url(${flags[10]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[11]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[12]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[13]})` }}>
                </div>
                <div className="flag" style={{ backgroundImage: `url(${flags[14]})` }}>
                </div>    
            </div>

        </div>
    )
}
   
    


export default OnLoad;

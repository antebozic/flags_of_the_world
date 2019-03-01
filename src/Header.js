import React from "react";
import "./Header.css";

const Header = ({show}) => {
   

    let styles = {
        display: 'none'
    };
    if(show) {
        styles = {
            display: 'block'
        };
    }

    return(
        <header className="header" style={styles}>
            <p>Flags of the World</p>
        </header>
    )
}

export default Header;
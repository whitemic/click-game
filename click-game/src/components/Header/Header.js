import React from "react";
import "./Header.css"

const Header = props => {
    return (
        <div className="header">
            <div className="title">
                <h1>{props.children}</h1>
            </div>
            <div className="instructions">
                <p>Click the pics! But don't click the same one twice!</p>
                <p>The user's current score is {props.score}</p>
            </div>
            
        </div>


    )

}




export default Header;
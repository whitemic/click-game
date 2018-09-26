import React from "react";
import "./Card.css"

const Card = ({id, handleClick, name, url}) => (
    <div className="card" data-clicked="false" onClick={() => handleClick(id)}>
        <div className="img-container">
            <img alt={name} src={url} id={id} />
        </div>
    </div>
);

export default Card; 

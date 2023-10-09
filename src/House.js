import React from 'react'
import "./House.css" 
import { Button } from './components/Button';


function House({src, title, description, price, Rent
}) {
    return (
        <div className="House">
            <img src={src} alt="" />
            <div className="House__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
                <Button to="/checkout">{Rent}</Button>
            </div>
        </div>
    )
}

export default House

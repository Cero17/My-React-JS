import React from "react";
import logo from "../images/world-logo.png" 

export default function Journal(){
    return(
        <div className="main-header">
            <img className="top-logo" src={logo}/>
            <h4>my travel journal</h4>
        </div>
    )
}
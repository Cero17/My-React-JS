import React from "react";
import location from "../images/location-icon.png";

export default function Card(props){
    return(
        <div className="my-card">
            <img className="japan-img" src={props.imgUrl} alt="location"/>
            <div className="content">
                <ul>
                    <li><img className="location-icon" src={location}alt="location-icon"/></li>
                    <li><p id="location">{props.location}</p></li>
                    <li> <a href={props.googleMapsUrl}>googleMapsUrl</a></li>
                </ul>
                <h1>{props.title}</h1>
                <h3>{props.startDate } - {props.endDate}</h3>
                <p id="description">{props.description}</p>
            </div>
        </div>
    )
}
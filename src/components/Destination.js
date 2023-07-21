import React from "react";
import pin from "../images/pin.png";

export default function Destination(props) {
  return (
    <div className="destinations">
      <section className="destination">
        <img
          src={props.destination.imageUrl}
          alt="mount-fuji"
          className="destination--photo"
        />
        <div className="destination--map">
          <img
            src={pin}
            alt="location-pin-icon"
            className="destination--map-elements"
          />
          <p className="destination--map-elements">
            {props.destination.location}
          </p>
          <a
            href={props.destination.googleMapsUrl}
            className="destination--map-elements"
          >
            View on Google Maps
          </a>
        </div>
        <div className="destination--text">
          <h1 className="destination--name">{props.destination.title}</h1>
          <span className="destination--dates">
            <p>{props.destination.startDate}</p>
            <p className="destination--dates-separator"> - </p>
            <p>{props.destination.endDate}</p>
          </span>
          <p className="destination--description">
            {props.destination.description}
          </p>
        </div>
      </section>
    </div>
  );
}

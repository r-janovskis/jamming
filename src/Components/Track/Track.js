import React, { useState } from "react";
import "./Track.css";

function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
    console.log("+ clicked");
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return (
        <button className="Track-action" onClick={addTrack}>
          +
        </button>
      );
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name} </h3>
        <p>
          {props.track.artist} | {props.track.album}{" "}
        </p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;

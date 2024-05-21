import React, { useState } from "react";
import "./Track.css";

function RenderAction(isRemoval) {
  if (isRemoval) {
    return <button className="Track-action">-</button>;
  } else {
    return <button className="Track-action">-</button>;
  }
}

function Track(props) {
  //const [song, setSong] = useState(props.track);

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name} </h3>
        <p>
          {props.track.artist} | {props.track.album}{" "}
        </p>
      </div>
      <RenderAction isRemoval={true} />
    </div>
  );
}

export default Track;

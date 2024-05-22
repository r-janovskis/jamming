import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";

function TrackList(props) {
  return (
    <div className="TrackList">
      {
        /*<!-- You will add a map method that renders a set of Track components  -->*/
        props.tracks.map((track) => (
          <Track
            key={track.id}
            track={track}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
          />
        ))
      }
    </div>
  );
}

export default TrackList;

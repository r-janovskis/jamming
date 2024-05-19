import React from "react";
import Track from "../Track/Track";
import "./TrackList.css";

function TrackList() {
  return (
    <div className="TrackList">
      {/*<!-- You will add a map method that renders a set of Track components  -->*/}
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default TrackList;

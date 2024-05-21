import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const searchTracks = [
    {
      id: 1,
      name: "Track1",
      artist: "Artist1",
      album: "album1",
    },
    {
      id: 2,
      name: "Track2",
      artist: "Artist2",
      album: "album2",
    },
  ];

  const playlistTracks = [
    {
      id: 57,
      name: "Best Track Ever",
      artist: "My favorite BAND",
      album: "Always in tune!",
    },
  ];

  const addTrack = (track) => {
    // Check if track's ID is already in playlist
    if (playlist.find((song) => song.id === track.id)) {
      //console.log("Track found in playlist");
      return;
    }
    //console.log("Adding track to playlist");
    setPlaylist((prev) => [...prev, track]);
  };

  const [searchResults, setSearchResults] = useState(searchTracks);

  const [playlist, setPlaylist] = useState(playlistTracks);
  const [playlistName, setPlaylistName] = useState("Reinis Favorite");

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistTracks={playlist} playlistName={playlistName} />
        </div>
      </div>
    </div>
  );
}

export default App;

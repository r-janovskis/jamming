import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const addTrack = (track) => {
    // Check if track's ID is already in playlist
    if (playlist.find((song) => song.id === track.id)) {
      //console.log("Track found in playlist");
      return;
    }
    //console.log("Adding track to playlist");
    setPlaylist((prev) => [...prev, track]);
  };

  const removeTrack = (track) => {
    setPlaylist(playlist.filter((song) => song.id != track.id));
  };

  const [playlistName, setPlaylistName] = useState("");
  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const [searchResults, setSearchResults] = useState([]);

  const savePlaylist = () => {
    const trackURIs = playlist.map((track) => track.uri);
    //console.log(`Playlist: ${playlistName}`);
    //trackURIs.forEach((uri) => console.log(uri));
  };

  const [searchTerm, setSearchTerm] = useState("");

  const search = async (search) => {
    setSearchTerm(search);
    const results = await Spotify.search(search);
    setSearchResults(results);
    //console.log(searchTerm);
    //console.log(Spotify.search(searchTerm));
    //console.log(search);
  };
  /*
  useEffect(() => {
    console.log(searchTerm);
    Spotify.search(searchTerm)
      .then((results) => {
        setSearchResults(results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [searchTerm]);
*/
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistTracks={playlist}
            playlistName={playlistName}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

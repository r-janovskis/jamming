import React from "react";

let accessToken;
const applicationID = "def7a33a7437457bb4653c51b0c30ec1";
const redirectURI = "http://localhost:3000/";

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      console.log("Token already in system");
      return accessToken;
    }
    const url = window.location.href;
    //console.log(`url => ${url}`);
    const accessTokenMatch = url.match(/access_token=([^&]*)/);
    const expirationTimeMatch = url.match(/expires_in=([^&]*)/);

    if (accessTokenMatch && expirationTimeMatch) {
      accessToken = accessTokenMatch[1];
      //console.log(accessTokenMatch);
      const expirationTime = Number(expirationTimeMatch[1]);
      //console.log(expirationTimeMatch);

      window.setTimeout(() => {
        accessToken = "";
        alert("Token expired!");
      }, expirationTime * 1000);
      window.history.pushState("Access Token", null, "/");
      console.log("New token set");
      return accessToken;
    } else {
      window.location = `https://accounts.spotify.com/authorize?client_id=${applicationID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
      console.log("Redirect...");
      return "";
    }
  },

  search: async (term) => {
    if (!term) {
      return [];
    }

    const localAccessToken = Spotify.getAccessToken();

    console.log(`Local Access token used in fetch: ${localAccessToken}`);

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          headers: {
            Authorization: `Bearer ${localAccessToken}`,
          },
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
          return [];
        }
        const tracks = jsonResponse.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));
        return tracks;
      } else {
        throw new Error("Request Failed!");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  },
};

export default Spotify;

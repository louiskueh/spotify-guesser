import React from "react";
import { SpotifyApiContext, Artist } from "react-spotify-api";
import axios from "axios";
// import withStyles from "material-ui/styles/withStyles";
import Player from "./Player.jsx";


class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      item: {
        album: {
          images: [{ url: "" }],
        },
        name: "",
        artists: [{ name: "" }],
        duration_ms: 0,
      },
      is_playing: "Paused",
      progress_ms: 0,
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }
  getCurrentlyPlaying(token) {
    console.log("Inside currently playing")
    const getCurrentSpotify = axios.create({
      baseURL: 'https://api.spotify.com',
      headers: {'Authorization': 'Bearer '+ token}
    });

    getCurrentSpotify.get('/v1/me/player/currently-playing')
      .then((response) => {
        console.log(response)
        this.setState({
          item: response.data.item,
          is_playing: response.data.is_playing,
          progress_ms: response.data.progress_ms,
        });
      })
      .catch((error) => {
        console.error(error.response.data);
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        LandingPage
        <SpotifyApiContext.Provider value={this.props.token}>
          <p>You are authorized with token: {this.props.token}</p>
        </SpotifyApiContext.Provider>
        <h1>playing is {this.state.is_playing}</h1>
        <h1> Progress is {this.progress_ms} </h1>
        <button onClick={() => this.getCurrentlyPlaying(this.props.token)}>Get current playing</button>
        <Player
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.progress_ms}
        />
      </div>
    );
  }
}

export default LandingPage;

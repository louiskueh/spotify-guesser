import React from "react";
import { SpotifyApiContext, Artist } from "react-spotify-api";
import axios from "axios";
// import withStyles from "material-ui/styles/withStyles";
import Player from "./Player.jsx";

class LandingPage extends React.Component {
  emptyItem = {
    album: {
      images: [{ url: "" }],
    },
    name: "",
    artists: [{ name: "" }],
    duration_ms: 0,
  };
  componentDidMount() {
    this.interval = setInterval(
      () => this.getCurrentlyPlaying(this.props.token),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.getCurrentlyPlaying);
  }
  constructor() {
    super();
    this.state = {
      token: null,
      item: this.emptyItem,
      is_playing: "Paused",
      progress_ms: 0,
    };
    this.getCurrentlyPlaying = this.getCurrentlyPlaying.bind(this);
  }

  getCurrentlyPlaying(token) {
    console.log("Polling for currently playing");
    const getCurrentSpotify = axios.create({
      baseURL: "https://api.spotify.com",
      headers: { Authorization: "Bearer " + token },
    });

    getCurrentSpotify
      .get("/v1/me/player/currently-playing")
      .then((response) => {
        console.log(response);
        // If we are playing something
        if ((response.status == 200)) {
          this.setState({
            item: response.data.item,
            is_playing: response.data.is_playing,
            progress_ms: response.data.progress_ms,
          });
        }else{
          this.setState({
            item: this.emptyItem,
            is_playing: "Paused",
            progress_ms: 0,
          })
        }
      })
      .catch((error) => {
        console.error(error.response);
      });
  }

  render() {
    const { classes } = this.props;
    let placeHolder;
    // console.log("STATE IS " + JSON.stringify(this.state.item));
    if (this.state == this.emptyItem) {
      // Empty image
      placeHolder = <div>Please play a song on Spotify</div>;
    } else {
      placeHolder = (
        <Player
          item={this.state.item}
          is_playing={this.state.is_playing}
          progress_ms={this.state.progress_ms}
        />
      );
    }
    return (
      <div>
        LandingPage
        <SpotifyApiContext.Provider value={this.props.token}>
          <p>You are authorized with token: {this.props.token}</p>
        </SpotifyApiContext.Provider>
        <button onClick={() => this.getCurrentlyPlaying(this.props.token)}>
          Get current playing
        </button>
        {placeHolder}
      </div>
    );
  }
}

export default LandingPage;

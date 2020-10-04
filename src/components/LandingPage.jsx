import axios from "axios";
import React from "react";
import FlippingCard from './FlippingCard.jsx'

class LandingPage extends React.Component {
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
      item: null,
      is_playing: false,
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
        if ((response.status === 200)) {
          this.setState({
            item: response.data.item,
            is_playing: response.data.is_playing,
            progress_ms: response.data.progress_ms,
          });
        } else {
          this.setState({
            item: null,
            is_playing: false,
            progress_ms: 0,
          })
        }
      })
      .catch((error) => {
        console.error(error.response);
      });
  }

  render() {
    console.log("STATE IS " + JSON.stringify(this.state.item));

    return (
      this.state.item ? <FlippingCard
        item={this.state.item}
        is_playing={this.state.is_playing}
        progress_ms={this.state.progress_ms}
      /> : <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7rem'
      }}>Please play a song on Spotify</div>

    );
  }
}

export default LandingPage;

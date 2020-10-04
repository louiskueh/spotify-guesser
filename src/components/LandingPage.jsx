import axios from "axios";
import React from "react";
import Card from './Card.jsx'
import PropTypes from 'prop-types';

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
    this.getSpotifyAPI = this.getSpotifyAPI.bind(this);
  }
  getSpotifyAPI() {
    return axios.create({
      baseURL: "https://api.spotify.com",
      headers: { Authorization: "Bearer " + this.props.token },
    });
  }
  getCurrentlyPlaying() {
    console.log("Polling for currently playing");

    this.getSpotifyAPI()
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
      this.state.item ? <Card
        item={this.state.item}
        is_playing={this.state.is_playing}
        progress_ms={this.state.progress_ms}
        spotifyAPI={this.getSpotifyAPI}
      /> : <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '7rem'
      }}>Please play a song on Spotify</div>

    );
  }
}

LandingPage.propTypes = {
  token: PropTypes.string,
}

export default LandingPage;

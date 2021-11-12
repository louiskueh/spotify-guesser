import { green } from "@material-ui/core/colors";
import { MDBCardBody, MDBInput } from "mdbreact";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./FlippingCard.css";
class FlippingCardBack extends Component {

  render() {
    return (
      <div className="back">
        Your Guess
        <MDBCardBody>
          <MDBInput
            hint={this.props.songName}
            className="whiteText"
            label="Song Name"
            disabled={true}
            containerClass="text-left"
            icon="music"
            color={green}
          />
          <MDBInput
            hint={this.props.artistName}
            className="whiteText"
            label="Artist Name"
            labelId="artist"
            icon="user"
            disabled={true}
            containerClass="text-left"
          />
          <MDBInput
            hint={
              this.props.inputSongName !== ""
                ? this.props.inputSongName
                : "NO SONG INPUTTED"
            }
            className="whiteText"
            label={
              "Song - " +
              this.props.songSimilarity +
              "% similar"
            }
            labelId="artist"
            icon="music"
            disabled={true}
            containerClass="text-left"
          />

          <MDBInput
            hint={
              this.props.inputArtistName !== ""
                ? this.props.inputArtistName
                : "NO ARTIST INPUTTED"
            }
            className="whiteText"
            label={
              "Artist - " +
              this.props.artistSimilarity +
              "% similar"
            }
            labelId="artist"
            icon="user"
            disabled={true}
            containerClass="text-left"
          />
        </MDBCardBody>
        <button
          onClick={this.props.toggleFlip}
          className="buttonClass"
        >
          Back
        </button>
      </div>
    );
  }
}
FlippingCardBack.propTypes = {
  toggleFlip: PropTypes.func,
  artistName: PropTypes.string,
  songName: PropTypes.string,
  inputArtistName: PropTypes.string,
  inputSongName: PropTypes.string,
  artistSimilarity: PropTypes.number,
  songSimilarity: PropTypes.number
};
export default FlippingCardBack;

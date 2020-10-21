import { green } from "@material-ui/core/colors";
import { MDBBtn, MDBCardBody, MDBInput } from "mdbreact";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./FlippingCard.css";
class FlippingCardBack extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor called");
  }
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  countLetters(input) {
    var dict = {};
    for (const letter of input) {
      dict[letter] = (dict[letter] || 0) + 1;
    }
    return dict;
  }
  calculateSimilar(actual, input) {
    if (actual === undefined || input === undefined) return 0;
    let sum = 0;
    let dif = 0;
    let actualDict = this.countLetters(actual);
    let inputDict = this.countLetters(input);
    for (const [key, value] of Object.entries(actualDict)) {
      if (key in inputDict) {
        dif += value - inputDict[key];
      } else {
        dif += value;
      }
      sum += value;
    }
    return ((sum - dif) / sum) * 100;
  }

  render() {
    // TODO:
    // Run analysis once only
    // Fix colours of text
    return (
      <div className="back">
        Back Side
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
              "Your Song Guess " +
              this.calculateSimilar(this.songName, this.inputSongName) +
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
              "Your Artist Guess " +
              this.calculateSimilar(this.artistName, this.inputArtistName) +
              "% similar"
            }
            labelId="artist"
            icon="user"
            disabled={true}
            containerClass="text-left"
          />
        </MDBCardBody>
        <MDBBtn
          color="success"
          onClick={this.props.toggleFlip}
          className="whiteText"
        >
          Back
        </MDBBtn>
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
};
export default FlippingCardBack;

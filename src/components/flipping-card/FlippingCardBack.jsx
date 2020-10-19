import { green } from "@material-ui/core/colors";
import { MDBBtn, MDBCardBody, MDBInput } from "mdbreact";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./FlippingCard.css";
class FlippingCardBack extends Component {
  artistName = this.props.item.album.artists[0].name;
  songName = this.props.item.name;

  countLetters(input) {
    var dict = {};
    for (const letter of input) {
      dict[letter] = (dict[letter] || 0) + 1;
    }
    return dict;
  }
  calculateSimilar(actual, input) {
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
    if (this.props.item) {
      console.log(
        this.calculateSimilar(this.artistName, this.props.artistName) +
          "% similar"
      );
    }

    return (
      <div className="back" >
        Back Side
        <MDBCardBody className="cardColor">
          <MDBInput
            hint={ this.songName}
            className="whiteText"
            label="Song Name"
            disabled={true}
            containerClass="text-left"
            icon="music"
            color={green}
          />
          <MDBInput
            hint= {this.artistName}
            className="whiteText"
            label="Artist Name"
            labelId="artist"
            icon="user"
            disabled={true}
            containerClass="text-left"
          />
          // TODO:
          // Run analysis once only
          // Fix colours of text
  
      
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
  item: PropTypes.object,
  artistName: PropTypes.string,
  songName: PropTypes.string,
};
export default FlippingCardBack;

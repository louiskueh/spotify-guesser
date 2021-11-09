import { MDBContainer } from "mdbreact";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Card.css";
import FlippingCardBack from "../flipping-card/FlippingCardBack";
import FlippingCardFront from "../flipping-card/FlippingCardFront";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
      songName: "",
      artistName: "",
      songSimilarity: 0,
      artistSimilarity: 0,
    };
    this.toggleFlip = this.toggleFlip.bind(this);
    this.setUserInput = this.setUserInput.bind(this);
  }
  toggleFlip() {
    console.log("flip");
    this.setState({ flipped: !this.state.flipped });
  }
  setUserInput(_songName, _artistName) {
    this.setState({
      songName: _songName,
      artistName: _artistName,
      songSimilarity: this.calculateSimilar(this.props.item.name, _songName),
      artistSimilarity: this.calculateSimilar(
        this.props.item.album.artists[0].name,
        _artistName
      ),
    });
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
    let actualDict = this.countLetters(actual.toLowerCase());
    let inputDict = this.countLetters(input.toLowerCase());

    for (const [key, value] of Object.entries(actualDict)) {
      if (key in inputDict) {
        dif += Math.abs(value - inputDict[key]);
      } else {
        dif += value;
      }
      sum += value;
    }

    return Math.round(((sum - dif) / sum) * 100);
  }
  render() {
    return (
      <MDBContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className={"card-container" + (this.state.flipped ? " flipped" : "")}
        >
          <FlippingCardFront
            toggleFlip={this.toggleFlip}
            setUserInput={this.setUserInput}
            item={this.props.item}
            progress_ms={this.props.progress_ms}
          />
          <FlippingCardBack
            toggleFlip={this.toggleFlip}
            inputSongName={this.state.songName}
            inputArtistName={this.state.artistName}
            songName={this.props.item.name}
            artistName={this.props.item.album.artists[0].name}
            songSimilarity={this.state.songSimilarity}
            artistSimilarity={this.state.artistSimilarity}
          ></FlippingCardBack>
        </div>
      </MDBContainer>
    );
  }
}
Card.propTypes = {
  item: PropTypes.object,
  progress_ms: PropTypes.number,
  spotifyAPI: PropTypes.func,
};
export default Card;

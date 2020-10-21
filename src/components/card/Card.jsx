import { MDBContainer } from "mdbreact";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./Card.css";
import FlippingCardBack from "../flipping-card/FlippingCardBack";
import FlippingCardFront from "../flipping-card/FlippingCardFront";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false, songName: "", artistName: "" }
    this.toggleFlip = this.toggleFlip.bind(this)
    this.setUserInput = this.setUserInput.bind(this)
  }
  toggleFlip() {
    console.log("flip");
    this.setState({ flipped: !this.state.flipped })
  }
  setUserInput(_songName, _artistName) {
      this.setState({songName: _songName, artistName: _artistName })
  }

  render() {
    return (
      <MDBContainer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "7rem",
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

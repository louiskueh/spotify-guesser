import { LinearProgress } from "@material-ui/core";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBInput } from "mdbreact";
import PropTypes from "prop-types";
import React, { Component } from "react";
import "./FlippingCard.css";
class FlippingCardFront extends Component {
  constructor(props) {
    super(props);
    this.state = { songName: "", artistName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.name + " " + event.target.value);
  }

  handleSubmit(event) {
    this.props.toggleFlip();
    this.props.setUserInput(this.state.songName, this.state.artistName);
  }

  render() {
    return (
      <MDBCard className="front">
        <MDBCardImage
          className="img-fluid"
          src={this.props.item.album.images[0].url}
          waves
        />
        <LinearProgress
          variant="determinate"
          value={(this.props.progress_ms * 100) / this.props.item.duration_ms}
        />
        <MDBCardBody>
          <MDBInput
            name="songName"
            value={this.state.songName}
            onChange={this.handleChange}
            className="whiteText"
            label="Guess the song!"
          />
          <MDBInput
            name="artistName"
            value={this.state.artistName}
            onChange={this.handleChange}
            className="whiteText"
            label="Guess the artist!"
          />
          <MDBBtn
            color="success"
            onClick={this.handleSubmit}
            className="whiteText"
          >
            Check
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
FlippingCardFront.propTypes = {
  item: PropTypes.object,
  progress_ms: PropTypes.number,
  toggleFlip: PropTypes.func,
  setUserInput: PropTypes.func,
};
export default FlippingCardFront;

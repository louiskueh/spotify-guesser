import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/FlippingCard.css'
import PropTypes from 'prop-types'
class FlippingCardBack extends Component {
    playNext(spotifyAPI) {
        console.log(spotifyAPI)
        spotifyAPI()
          .post("https://api.spotify.com/v1/me/player/next")
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error.response);
          });
      }
    render() {
        return (
            <div className="back" onMouseLeave={this.props.toggleFlip}  >
                Back Side
                
                <MDBBtn color='success' onClick={this.props.toggleFlip} className="whiteText">Back</MDBBtn>
                <MDBBtn color='success' onClick={()=>this.playNext(this.props.spotifyAPI)} className="whiteText">Next Song</MDBBtn>
            </div>

        );
    }
}
FlippingCardBack.propTypes = {
    toggleFlip: PropTypes.func,
    spotifyAPI: PropTypes.func
}
export default FlippingCardBack;
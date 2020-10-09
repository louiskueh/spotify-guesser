import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/FlippingCard.css'
import PropTypes from 'prop-types'
class FlippingCardBack extends Component {
 
    render() {
        return (
            <div className="back" onMouseLeave={this.props.toggleFlip}  >
                Back Side
                <MDBBtn color='success' onClick={this.props.toggleFlip} className="whiteText">Back</MDBBtn>          
            </div>

        );
    }
}
FlippingCardBack.propTypes = {
    toggleFlip: PropTypes.func,
    spotifyAPI: PropTypes.func

}
export default FlippingCardBack;
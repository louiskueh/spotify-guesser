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
                <MDBCardBody className='cardColor'>
                        <MDBInput className='whiteText' label="Guess the song!" />
                        <MDBInput className='whiteText' label="Guess the artist!" />
                        <MDBBtn color='success' onClick={this.props.toggleFlip} className="whiteText">Check</MDBBtn>
                    </MDBCardBody>
                <MDBBtn color='success' onClick={this.props.toggleFlip} className="whiteText">Back</MDBBtn>          
            </div>

        );
    }
}
FlippingCardBack.propTypes = {
    toggleFlip: PropTypes.func,
    item: PropTypes.object

}
export default FlippingCardBack;
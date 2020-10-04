import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/FlippingCard.css'
import PropTypes from 'prop-types'
class FlippingCardFront extends Component {

    render() {
        return (
            <div className="front">
                <MDBCard style={{
                    width: "100%",
                    height: "100%"
                }}>
                    <MDBCardImage className="img-fluid" src={this.props.item.album.images[0].url} waves />
                    <LinearProgress variant="determinate" value={(this.props.progress_ms * 100 / this.props.item.duration_ms)} />
                    <MDBCardBody className='cardColor'>
                        <MDBInput className='whiteText' label="Guess the song!" />
                        <MDBInput className='whiteText' label="Guess the artist!" />
                        <MDBBtn color='success' onClick={this.props.toggleFlip} className="whiteText">Check</MDBBtn>
                    </MDBCardBody>
                </MDBCard></div>
        );
    }
}
FlippingCardFront.propTypes = {
    item: PropTypes.object,
    progress_ms: PropTypes.number,
    toggleFlip: PropTypes.func
}
export default FlippingCardFront;
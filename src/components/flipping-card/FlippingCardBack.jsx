import { MDBBtn, MDBCardBody, MDBInput } from 'mdbreact';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import './FlippingCard.css';
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
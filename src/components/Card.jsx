import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/Card.css'
import PropTypes from 'prop-types'
import FlippingCardFront from "./FlippingCardFront";
import FlippingCardBack from "./FlippingCardBack";
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = { flipped: false };
        this.toggleFlip = this.toggleFlip.bind(this);
    }
    toggleFlip() {
        console.log('flip')
        this.setState({ flipped: !this.state.flipped });
    }


    render() {
        return (
            <MDBContainer style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '7rem'
            }}>
                <div className={"card-container" + (this.state.flipped ? " flipped" : "")}>
                    <FlippingCardFront toggleFlip={this.toggleFlip} item={this.props.item} progress_ms={this.props.progress_ms} />
                    <FlippingCardBack      
                        toggleFlip={this.toggleFlip}
                    ></FlippingCardBack>
                </div>


            </MDBContainer >

        );
    }
}
Card.propTypes = {
    item: PropTypes.object,
    progress_ms: PropTypes.number,
    spotifyAPI: PropTypes.func
}
export default Card;
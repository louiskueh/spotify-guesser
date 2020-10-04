import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/FlippingCard.css'
import PropTypes from 'prop-types'
import FlippingCardFront from "./FlippingCardFront";
class FlippingCard extends Component {
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
                    <div className="back" onMouseLeave={this.toggleFlip} >Back Side</div>
                </div>


            </MDBContainer >

        );
    }
}
FlippingCard.propTypes = {
    item: PropTypes.object,
    progress_ms: PropTypes.number
}
export default FlippingCard;
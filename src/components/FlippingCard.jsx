import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/FlippingCard.css'
class FlippingCard extends Component {
    constructor(props) {
        super(props)
        this.state = { flipped: false };
        this.flip = this.flip.bind(this);
    }
    flip = () => {
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
                <div className="card-container">
                    <div className="front">
                        <MDBCard style={{
                            width: "100%",
                            height: "100%"
                        }}>
                            <MDBCardImage className="img-fluid" src={this.props.item.album.images[0].url} waves />
                            <LinearProgress variant="determinate" value={(this.props.progress_ms * 100 / this.props.item.duration_ms)} />
                            <MDBCardBody className='cardColor'>
                                {/* <MDBCardTitle className='whiteText'>{this.props.item.name}</MDBCardTitle>
                        <MDBCardText className='whiteText'>
                            {this.props.item.artists[0].name}
                        </MDBCardText> */}
                                <MDBInput className='whiteText' label="Guess the song!" />
                                <MDBInput className='whiteText' label="Guess the artist!" />
                                <div className='flip'>
                                    <MDBBtn color='success' onClick={this.flip} onMouseLeave={this.flip} className={'whiteText' + (this.state.flipped ? "flipped" : "")}>Check</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard></div>
                <div className="back">Back Side</div>
                </div>


            </MDBContainer >

        );
    }
}

export default FlippingCard;
import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { LinearProgress } from '@material-ui/core';
import '../styles/FlippingCard.css'
class FlippingCard extends Component {
    styles = {
        customButton: {
            backgroundColor: '#1DB954',
            color: '#FFFFFF',
        }
    };
    
    state = {
        flipped1: false,
    }

    handleFlipping = id => () => {
        const cardId = `flipped${id}`;
        this.setState({ [cardId]: !this.state[cardId] });
    }

    render() {
        return (
            <MDBContainer style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '7rem'
            }}>

                <MDBCard style={{
                    width: "20rem",
                    height:"40rem"
                }}>
                    <MDBCardImage style={{
                        width:"20rem",
                        height:"20rem"
                    }} className="img-fluid" src={this.props.item.album.images[0].url} waves />
                    <LinearProgress variant="determinate" value={(this.props.progress_ms * 100 / this.props.item.duration_ms)} />
                    <MDBCardBody className='cardColor'>
                        <MDBCardTitle className='whiteText'>{this.props.item.name}</MDBCardTitle>
                        <MDBCardText className='whiteText'>
                            {this.props.item.artists[0].name}
                        </MDBCardText>
                        <MDBInput className='whiteText' label="Guess the song!" />
                        <MDBInput className='whiteText' label="Guess the artist!" />
                        <MDBBtn color='success'>Check</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default FlippingCard;
import React, { Component } from "react";
import { MDBInput, MDBContainer, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
class FlippingCardPage extends Component {

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
                    width: "30rem",

                }}>
                    <MDBCardImage className="img-fluid" src={this.props.item.album.images[0].url} waves />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.item.name}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.item.artists[0].name}
                        </MDBCardText>

                        <MDBInput label="Enter your guess here!" />
                        <MDBBtn href="#">Check artist</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default FlippingCardPage;
import { LinearProgress } from '@material-ui/core';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBInput } from 'mdbreact';
import PropTypes from 'prop-types';
import React, { Component } from "react";
import './FlippingCard.css';
class FlippingCardFront extends Component {
    constructor(props) {
        super(props);
        this.state = {songName: '', artistName:''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange (event) {
        this.setState({ [event.target.name]: event.target.value });
        console.log(event.target.name + " " + event.target.value)
    }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
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
                        <MDBInput  name="songName" value={this.state.songName} onChange={this.handleChange} className='whiteText' label="Guess the song!" />
                        <MDBInput name="artistName" value={this.state.artistName} onChange={this.handleChange} className='whiteText' label="Guess the artist!" />
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
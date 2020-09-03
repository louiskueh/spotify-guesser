import React from "react";
import { SpotifyApiContext } from 'react-spotify-api'
// import withStyles from "material-ui/styles/withStyles";



class LandingPage extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
            LandingPage
      
        <SpotifyApiContext.Provider value={this.props.token}>
        {/* Your Spotify Code here */}
        <p>You are authorized with token: {this.props.token}</p>
      </SpotifyApiContext.Provider>
      </div>
    );
  }
}

export default LandingPage;

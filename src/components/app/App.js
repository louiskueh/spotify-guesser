import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { MDBBtn } from 'mdbreact';
import { SpotifyAuth, Scopes } from 'react-spotify-auth';
import './App.css';
import LandingPage from '../landing-page/LandingPage.jsx';
import 'react-spotify-auth/dist/index.css'
const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState();
  const getSpotifyAuthToken = Cookies.get('spotifyAuthToken')
  useEffect(() => {
    setSpotifyAuthToken( Cookies.get('spotifyAuthToken'));
  }, [getSpotifyAuthToken]);

  const logout = () => {
    Cookies.remove('spotifyAuthToken', {
      path: '',
    });
    window.location = '/';
  };

  return (
    <div>
      <div className="spotifyHeading">
        <h1>Spotify Guesser</h1>
      </div>
      {Cookies.get('spotifyAuthToken') ? (
        
        <div>
          <LandingPage token={spotifyAuthToken}></LandingPage>
        </div>
      ) : (
          // Display the login page
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '10rem',
          }}>
            <SpotifyAuth
              redirectUri='https://louiskueh.com/artist-guesser-spotify/'
              clientID='3770ed0bc8aa4ae6ba4dd47dec8b5fcd'
              scopes={[Scopes.userReadCurrentlyPlaying]
              }
 
            />
          </div>
        )}

      {Cookies.get('spotifyAuthToken') ? <div className="logout">
        <MDBBtn gradient="aqua" onClick={logout}>Logout</MDBBtn>
      </div> : ('')}
    </div>
  );
};
export default App;

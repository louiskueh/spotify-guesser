import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { MDBBtn } from 'mdbreact'
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import './App.css'
import LandingPage from './components/LandingPage.jsx'

const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState()
  useEffect(() => {
    setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
  }, [Cookies.get('spotifyAuthToken')])

  const logout = () => {
    Cookies.remove('spotifyAuthToken', {
      path: ''
    })
    window.location = '/'
  }

  return (
    <div>
      <div className="d-flex justify-content-center greenColor">
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
            paddingTop: '10rem'
          }}>
            <SpotifyAuth
              redirectUri='http://localhost:3000/callback'
              clientID='3770ed0bc8aa4ae6ba4dd47dec8b5fcd'
              scopes={[Scopes.userReadCurrentlyPlaying]
              }
              logoClassName='logoClass'
              btnClassName='spotifyBtn'
            />
          </div>
        )}

      {Cookies.get('spotifyAuthToken') ? <div className="move-to-bottom">
        <MDBBtn color='danger' onClick={logout}>Logout</MDBBtn>
      </div> : ("")}
    </div>
  )
}
export default App
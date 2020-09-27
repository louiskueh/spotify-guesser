import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import './App.css'
import LandingPage from './components/LandingPage.jsx'
import Header from './components/Header.jsx'


const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState()
  useEffect(() => {
    setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
  }, [Cookies.get('spotifyAuthToken')])

  return (
    <div className='App'>
      <Header></Header>

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
              scopes={[Scopes.userReadCurrentlyPlaying]} // either style will work
            />
          </div>
        )}
    </div>
  )
}
export default App
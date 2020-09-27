import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import LandingPage from './components/LandingPage.jsx'
import Header from './components/Header.jsx'


const App = () => {
  const [spotifyAuthToken, setSpotifyAuthToken] = useState()
  useEffect(() => {
    setSpotifyAuthToken(Cookies.get('spotifyAuthToken'))
  }, [Cookies.get('spotifyAuthToken')])

  return (
    <div className='app'>
      <Header></Header>
  
      {Cookies.get('spotifyAuthToken') ? (
        <div>
          <LandingPage token={spotifyAuthToken}></LandingPage>
        </div>
      ) : (
          // Display the login page
          <div class="d-flex justify-content-center">
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
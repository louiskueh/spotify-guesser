import React from 'react'
import { SpotifyApiContext } from 'react-spotify-api'
import Cookies from 'js-cookie'
 
import { SpotifyAuth, Scopes } from 'react-spotify-auth'
import 'react-spotify-auth/dist/index.css'
import LandingPage from './components/LandingPage.jsx'


const App = () => {
  const token = Cookies.get('spotifyAuthToken')
  return (
    <div className='app'>
      {token ? (
        <div>
        <LandingPage token={token}></LandingPage>
        </div>
      ) : (
        // Display the login page
        <SpotifyAuth
          redirectUri='http://localhost:3000/callback'
          clientID='3770ed0bc8aa4ae6ba4dd47dec8b5fcd'
          scopes={[Scopes.userReadPrivate, Scopes.userReadEmail]} // either style will work
        />
      )}
    </div>
  )
}
export default App
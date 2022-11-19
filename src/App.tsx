import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import ArtworkGallery from './components/ArtworkGallery/ArtworkGallery'
import ArtistHall from './components/ArtistHall/ArtistHall'
import Auth from './components/Auth/Auth'
import ArtworkPage from './components/Artwork/ArtworkPage'
import ArtistComponent from './components/Artist/ArtistComponent'

import { darkTheme } from './utils/theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gallery" element={<ArtworkGallery />} />
            <Route path="/hall" element={<ArtistHall />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/artwork/:id" element={<ArtworkPage />} />
            <Route path="/artist" element={<ArtistComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

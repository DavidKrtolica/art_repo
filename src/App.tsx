import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import ArtworkGallery from './components/ArtworkGallery/ArtworkGallery'
import ArtistHall from './components/ArtistHall/ArtistHall'
import Auth from './components/Auth/Auth'
import Artwork from './components/Artwork/Artwork'
import ArtistComponent from './components/Artist/ArtistComponent'

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Courier New',
      'Lucida Sans Typewriter',
      'Lucida Typewriter',
    ].join(','),
  },

  palette: {
    mode: 'dark',
  },
})

const App = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/gallery" element={<ArtworkGallery />} />
            <Route path="/hall" element={<ArtistHall />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/artwork" element={<Artwork />} />
            <Route path="/artist" element={<ArtistComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

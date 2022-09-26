import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navigation from './components/Navigation'
import Homepage from './components/Homepage'
import ArtworkGallery from './components/ArtworkGallery'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const App: FC<{}> = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Navigation />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="gallery" element={<ArtworkGallery />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App

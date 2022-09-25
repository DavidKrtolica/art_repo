import { FC } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Navigation from './components/Navigation'
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
      </ThemeProvider>
    </>
  )
}

export default App

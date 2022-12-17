import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles'
import { amber, yellow, red } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: SimplePaletteColorOptions
    yellow: SimplePaletteColorOptions
    red: SimplePaletteColorOptions
  }
  interface PaletteOptions {
    tertiary: SimplePaletteColorOptions
    yellow: SimplePaletteColorOptions
    red: SimplePaletteColorOptions
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true
    yellow: true
    red: true
  }
}

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    tertiary: true
    yellow: true
    red: true
  }
}

const { palette } = createTheme()
export const darkTheme = createTheme({
  typography: {
    fontFamily: [
      'Courier New',
      'Lucida Sans Typewriter',
      'Lucida Typewriter',
    ].join(','),
  },

  palette: {
    mode: 'dark',
    tertiary: palette.augmentColor({ color: amber }),
    yellow: palette.augmentColor({ color: yellow }),
    red: palette.augmentColor({ color: red }),
  },
})

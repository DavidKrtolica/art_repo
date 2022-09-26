import { FC } from 'react'
import { Typography, Box, Link } from '@mui/material'

import { tertiary } from '../utils/colors'

const homepageLinks: {
  text: string
  href: string
  mainColor: string
  darkColor: string
}[] = [
  {
    text: 'Artwork Gallery',
    href: '/gallery',
    mainColor: 'primary',
    darkColor: 'primary.dark',
  },
  {
    text: 'Artist Hall',
    href: '/hall',
    mainColor: 'secondary',
    darkColor: 'secondary.dark',
  },
  {
    text: 'Authenticate',
    href: '/auth',
    mainColor: tertiary.main,
    darkColor: tertiary.dark,
  },
  {
    text: 'Register',
    href: '/auth',
    mainColor: tertiary.main,
    darkColor: tertiary.dark,
  },
]

const Homepage: FC<{}> = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      flexDirection="column"
    >
      {homepageLinks.map((link) => (
        <Link href={link.href} underline="hover">
          <Typography
            variant="h2"
            color={link.mainColor}
            sx={{ '&:hover': { color: link.darkColor } }}
          >
            {link.text}
          </Typography>
        </Link>
      ))}
    </Box>
  )
}

export default Homepage

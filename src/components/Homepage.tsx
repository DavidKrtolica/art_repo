import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { HomepageItem } from '../utils/types'
import useAuth from '../hooks/useAuth'

const Homepage = () => {
  const { user } = useAuth()

  const homepageItems: HomepageItem[] = [
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
      mainColor: 'tertiary.main',
      darkColor: 'tertiary.dark',
    },
    {
      text: 'Register',
      href: '/auth',
      mainColor: 'tertiary.main',
      darkColor: 'tertiary.dark',
      props: { isRegister: true },
    },
    {
      text: 'Log Out',
      href: '/logout',
      mainColor: 'tertiary.main',
      darkColor: 'tertiary.dark',
    },
  ]

  if (user) {
    homepageItems.splice(2, 2)
  } else {
    homepageItems.splice(-1, 1)
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      flexDirection="column"
    >
      {homepageItems.map((link) => (
        <Link
          to={link.href}
          state={link.props}
          style={{ textDecoration: 'none' }}
        >
          <Typography
            variant="h2"
            color={link.mainColor}
            sx={{
              '&:hover': { color: link.darkColor, textDecoration: 'underline' },
            }}
          >
            {link.text}
          </Typography>
        </Link>
      ))}
    </Box>
  )
}

export default Homepage

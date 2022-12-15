import { Box, Container, Typography, Paper } from '@mui/material'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import { HomepageItem } from '../../utils/types'
import { red } from '../../utils/colors'
import { useEffect } from 'react'

const Logout = () => {
  const { setToken, token, setUser, user } = useAuth()
  useEffect(() => {
    setToken(null)
    setUser(null)
    if (token && user) {
      window.location.assign('/logout')
    }
  }, [])

  const links: HomepageItem[] = [
    {
      text: 'Home',
      href: '/',
      mainColor: 'primary.main',
      darkColor: 'primary.dark',
    },
    {
      text: 'Authenticate',
      href: '/auth',
      mainColor: 'tertiary.main',
      darkColor: 'tertiary.dark',
    },
  ]
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper
          sx={{
            padding: '20px',
            pt: '50px',
            width: '500px',
            height: '500px',
            boxShadow: `5px 10px 15px 10px ${red.evenDarker}`,
            alignContent: 'center',
          }}
        >
          <Typography>You have successfully logged out.</Typography>
          <Typography variant="h5">
            Thank you for bringing art to the world!
          </Typography>
          <br></br>
          <br></br>
          {links.map((link) => (
            <Link
              to={link.href}
              state={link.props}
              style={{ textDecoration: 'none' }}
            >
              <Typography
                variant="h4"
                color={link.mainColor}
                sx={{
                  '&:hover': {
                    color: link.darkColor,
                    textDecoration: 'underline',
                  },
                }}
              >
                {link.text}
              </Typography>
            </Link>
          ))}
        </Paper>
      </Box>
    </Container>
  )
}

export default Logout

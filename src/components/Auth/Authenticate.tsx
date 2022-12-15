import { useState } from 'react'
import { Paper, TextField, Button, Stack, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { red } from '../../utils/colors'
import useAuth from '../../hooks/useAuth'

const Authenticate = ({ setIsRegister, setAlert }) => {
  const { setToken, setUser } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuthenticate = async () => {
    const url = new URL(process.env.REACT_APP_API_BASE_URL + '/auth/login')

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    const data = await response.json()

    if (data.error) {
      setAlert({
        severity: 'error',
        message: data.error,
      })
    } else {
      setToken(data.token)
      setUser({
        id: data.id,
        email: data.email,
        role: data.role,
        isLive: data.isLive,
      })
      window.location.assign('/')
    }
  }

  return (
    <>
      <Paper
        sx={{
          padding: '20px',
          pt: '50px',
          width: '500px',
          height: '500px',
          boxShadow: `5px 10px 15px 10px ${red.evenDarker}`,
        }}
      >
        <form>
          <Stack alignItems="center" spacing={3}>
            <Typography variant="h5">Authenticate</Typography>
            <Typography>Welcome!</Typography>
            <TextField
              required
              sx={{ width: '75%' }}
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="off"
              color="tertiary"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              color="tertiary"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              id="login-btn"
              sx={{ width: '50%' }}
              variant="contained"
              color="tertiary"
              endIcon={<LoginIcon />}
              type="submit"
              onClick={(e) => {
                e.preventDefault()
                handleAuthenticate()
              }}
            >
              Authenticate
            </Button>
          </Stack>
        </form>
      </Paper>
      <Button
        sx={{ height: '75px' }}
        variant="contained"
        color="secondary"
        startIcon={<AppRegistrationIcon />}
        onClick={() => {
          setIsRegister(true)
        }}
      >
        Register
      </Button>
    </>
  )
}

export default Authenticate

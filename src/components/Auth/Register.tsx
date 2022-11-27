import { useState } from 'react'
import { Paper, TextField, Button, Stack, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { red } from '../../utils/colors'
import { useNavigate } from 'react-router-dom'

const Signup = ({ setIsRegister, setAlert }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const handleRegister = async () => {
    const url = new URL(process.env.REACT_APP_API_BASE_URL + '/auth/register')

    if (password === repeatPassword) {
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
      } else if (data.success) {
        setAlert({
          severity: 'success',
          message: data.success,
        })
        setIsRegister(false)
      }
    } else {
      setAlert({
        severity: 'error',
        message: 'The passwords do not match',
      })
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
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h5">Register</Typography>
            <Typography>Please fill out the fields below</Typography>
            <TextField
              required
              sx={{ width: '75%' }}
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="nope"
              size="small"
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
              size="small"
              color="tertiary"
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="repeatPassword"
              label="Repeat password"
              variant="outlined"
              type="password"
              size="small"
              color="tertiary"
              onChange={(e) => setRepeatPassword(e.target.value)}
            />
            <Button
              sx={{ width: '50%' }}
              variant="contained"
              type="submit"
              color="tertiary"
              endIcon={<AppRegistrationIcon />}
              onClick={(e) => {
                e.preventDefault()
                handleRegister()
              }}
            >
              Register
            </Button>
          </Stack>
        </form>
      </Paper>
      <Button
        sx={{ height: '75px' }}
        variant="contained"
        color="secondary"
        startIcon={<LoginIcon />}
        onClick={() => {
          setIsRegister(false)
        }}
      >
        Authenticate
      </Button>
    </>
  )
}

export default Signup

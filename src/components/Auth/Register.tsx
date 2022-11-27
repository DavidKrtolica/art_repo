import { Paper, TextField, Button, Stack, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { red } from '../../utils/colors'

const Signup = ({ setIsRegister, setAlert }) => {
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
            />
            <Button
              sx={{ width: '50%' }}
              variant="contained"
              type="submit"
              color="tertiary"
              endIcon={<AppRegistrationIcon />}
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

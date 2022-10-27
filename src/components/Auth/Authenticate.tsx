import { Paper, TextField, Button, Stack, Typography } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { red } from '../../utils/colors'

const Authenticate = ({ setIsRegister }) => {
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
              id="username"
              label="Username"
              variant="outlined"
              type="text"
              autoComplete="off"
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
            />
            <Button
              sx={{ width: '50%' }}
              variant="contained"
              color="tertiary"
              endIcon={<LoginIcon />}
              type="submit"
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

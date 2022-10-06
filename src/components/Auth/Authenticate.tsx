import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper, TextField, Button, Stack, Typography } from '@mui/material'
import { red } from '../../utils/colors'

const Authenticate = ({ setIsRegister }) => {
  let navigate = useNavigate()

  //const { setAlert, isSignup, setToken } = props
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')

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
        <form
        //onSubmit={handleLogin}
        >
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
              //value={username}
              //onChange={e => setUsername(e.target.value)}
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              //value={password}
              //onChange={e => setPassword(e.target.value)}
            />
            <Button
              sx={{ width: '50%' }}
              variant="contained"
              //endIcon={<LoginIcon />}
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
        //startIcon={<MusicNoteIcon />}
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

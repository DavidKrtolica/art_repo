import { useState } from 'react'
import { Paper, TextField, Button, Stack, Typography } from '@mui/material'
import { red } from '../../utils/colors'

const Signup = ({ setIsRegister }) => {
  //const { setAlert, isSignup } = props

  //const [username, setUsername] = useState('')
  //const [email, setEmail] = useState('')
  //const [password, setPassword] = useState('')
  //const [repeatPassword, setRepeatPassword] = useState('')

  //const [usernameError, setUsernameError] = useState(null)
  //const [emailError, setEmailError] = useState(null)
  //const [passwordError, setPasswordError] = useState(null)
  //const [repeatPasswordError, setRepeatPasswordError] = useState(null)

  /*const validateInput = () => {
    if (
      !usernameError &&
      !emailError &&
      !passwordError &&
      !repeatPasswordError
    ) {
      return true
    }
    console.log(false)
    return false
  }*/

  /*const handleSubmit = (event) => {
    event.preventDefault()
    if (validateInput()) {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_API_URL}/accounts`,
        data: {
          username: username,
          email: email,
          password: password,
        },
      })
        .then((res) => {
          if (res.data.createdAccount) {
            setAlert({
              severity: 'success',
              message: 'Account created successfully! You can now log in.',
            })
            isSignup(false)
          }
        })
        .catch((error) => {
          setAlert({
            severity: 'error',
            message: error.response.data.message,
          })
        })
    }
  }*/

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
        //onSubmit={handleSubmit}
        >
          <Stack alignItems="center" spacing={2}>
            <Typography variant="h5">Register</Typography>
            <Typography>Please fill out the fields below</Typography>
            <TextField
              required
              sx={{ width: '75%' }}
              id="username"
              label="Username"
              variant="outlined"
              type="text"
              autoComplete="nope"
              size="small"
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              autoComplete="nope"
              size="small"
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              size="small"
            />
            <TextField
              required
              sx={{ width: '75%' }}
              id="repeatPassword"
              label="Repeat password"
              variant="outlined"
              type="password"
              size="small"
            />
            <Button
              sx={{ width: '50%' }}
              variant="contained"
              type="submit"
              //endIcon={<MusicNoteIcon />}
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
        //startIcon={<LoginIcon />}
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

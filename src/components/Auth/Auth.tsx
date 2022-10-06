import { useState } from 'react'
import { Box, Alert, Container } from '@mui/material'
import Authenticate from './Authenticate'
import Register from './Register'

const Auth = ({ register }: { register?: boolean }) => {
  //const { setToken } = props

  const [isRegister, setIsRegister] = useState(register)
  //const [alert, setAlert] = useState(null)

  return (
    <Container>
      {/*alert ? (
        <Box justifyContent="center" display="flex">
          <Alert
            sx={{ width: '100%' }}
            variant="filled"
            severity={alert.severity}
          >
            {alert.message}
          </Alert>
        </Box>
      ) : null*/}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {isRegister ? (
          <Register setIsRegister={setIsRegister} />
        ) : (
          <Authenticate setIsRegister={setIsRegister} />
        )}
      </Box>
    </Container>
  )
}

export default Auth

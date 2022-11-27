import { useState } from 'react'
import { Box, Container, Alert, AlertColor } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Authenticate from './Authenticate'
import Register from './Register'

type Alert = {
  severity: AlertColor
  message: string
}

const Auth = () => {
  const location = useLocation()

  const [isRegister, setIsRegister] = useState(
    location.state?.isRegister || false
  )

  const [alert, setAlert] = useState<Alert>()

  return (
    <Container>
      {alert ? (
        <Box justifyContent="center" display="flex">
          <Alert
            sx={{ width: '100%' }}
            variant="filled"
            severity={alert.severity}
          >
            {alert.message}
          </Alert>
        </Box>
      ) : null}

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        {isRegister ? (
          <Register setIsRegister={setIsRegister} setAlert={setAlert} />
        ) : (
          <Authenticate setIsRegister={setIsRegister} setAlert={setAlert} />
        )}
      </Box>
    </Container>
  )
}

export default Auth

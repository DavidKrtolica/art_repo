import { useState } from 'react'
import { Box, Container } from '@mui/material'
import { useLocation } from 'react-router-dom'
import Authenticate from './Authenticate'
import Register from './Register'

const Auth = () => {
  const location = useLocation()

  const [isRegister, setIsRegister] = useState(
    location.state?.isRegister || false
  )

  return (
    <Container>
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

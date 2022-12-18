import { Box, Alert } from '@mui/material'
//import { gql, useQuery, useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'

import useAuth from '../../../hooks/useAuth'
import { SnackbarAlert } from '../../../utils/types'
import ArtworkForm from './ArtworkForm'

const CuratorArtworkPage = () => {
  const { user, setUser } = useAuth()
  const [alert, setAlert] = useState<SnackbarAlert | null>(null)

  return (
    <>
      {alert && (
        <Box justifyContent="center" display="flex">
          <Alert
            sx={{
              width: '80vw',
              mt: 2,
              position: 'fixed',
              zIndex: '100',
              display: 'flex',
              opacity: 0.5,
              '&:hover': { opacity: 1 },
            }}
            variant="outlined"
            severity={alert.severity}
          >
            {alert.message}
          </Alert>
        </Box>
      )}
      <ArtworkForm />
    </>
  )
}

export default CuratorArtworkPage

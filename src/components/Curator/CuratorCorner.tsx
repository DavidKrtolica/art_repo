import { Box, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { text } from 'stream/consumers'

import useAuth from '../../hooks/useAuth'
import PageHeader from '../PageHeader'

const CuratorCorner = () => {
  const theme = useTheme()
  const { user } = useAuth()
  if (!user) {
    window.location.assign('/')
  } else if (!user.isLive) {
    window.location.assign('/curator/profile')
    return null
  }
  return (
    <>
      <PageHeader title="Curator's Corner" color={theme.palette.red.main} />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Link id='edit-profile' to={'/curator/profile'} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h3"
            color={'text.primary'}
            sx={{
              width: '80vm',
              '&:hover': {
                color: 'text.secondary',
                textDecoration: 'underline',
              },
            }}
          >
            {'Your personal information'}
          </Typography>
        </Link>
        <Link to={'/curator/artwork'} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h3"
            color={'text.primary'}
            sx={{
              width: '80vm',
              '&:hover': {
                color: 'text.secondary',
                textDecoration: 'underline',
              },
            }}
          >
            {'Add a new artwork'}
          </Typography>
        </Link>
      </Box>
    </>
  )
}

export default CuratorCorner

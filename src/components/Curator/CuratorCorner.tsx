import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

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
      <Box display="flex" alignItems="center" justifyContent="center"></Box>
    </>
  )
}

export default CuratorCorner

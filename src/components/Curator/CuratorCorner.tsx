import { Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import PageHeader from '../PageHeader'

const CuratorCorner = () => {
  const theme = useTheme()

  return (
    <>
      <PageHeader title="Curator's Corner" color={theme.palette.red.main} />
      <Box display="flex" alignItems="center" justifyContent="center"></Box>
    </>
  )
}

export default CuratorCorner

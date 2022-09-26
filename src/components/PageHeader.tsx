import { Box, Typography } from '@mui/material'

type PageHeaderProps = { title: string; color: string }

const PageHeader = ({ title, color }: PageHeaderProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography variant="h3" color={color} sx={{ width: '75vw', m: 3 }}>
        {title}
      </Typography>
    </Box>
  )
}

export default PageHeader

import { Box, Typography } from '@mui/material'

type PageHeaderProps = { title: string; color: string }

const PageHeader = ({ title, color }: PageHeaderProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Typography
        variant="h3"
        color={color}
        sx={{ width: '80vw', px: '20px', m: 3, mb: 5 }}
      >
        {title}
      </Typography>
    </Box>
  )
}

export default PageHeader

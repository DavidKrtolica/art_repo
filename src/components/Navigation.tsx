import { FC, useState, MouseEvent, KeyboardEvent, ReactNode } from 'react'
import {
  Fab,
  Drawer,
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

const Navigation: FC<{}> = () => {
  const anchor = 'left'

  const menuSections: { name: string; icon: ReactNode }[] = [
    {
      name: 'Artwork Gallery',
      icon: <ColorLensIcon />,
    },
    { name: 'Artist Roster', icon: <AccountBoxIcon /> },
    { name: 'Log In', icon: <LoginIcon /> },
    { name: 'Register', icon: <AppRegistrationIcon /> },
  ]

  const [open, setOpen] = useState(false)
  const toggleDrawer =
    (open: boolean) => (event: MouseEvent | KeyboardEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setOpen(open)
    }

  return (
    <>
      <Fab
        color="primary"
        size="medium"
        onClick={toggleDrawer(true)}
        sx={{
          position: 'fixed',
          top: '50%',
          left: 10,
        }}
      >
        <DoubleArrowIcon />
      </Fab>
      <Drawer anchor={anchor} open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuSections.map((section) => (
              <ListItem key={section.name} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <ListItemText primary={section.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navigation

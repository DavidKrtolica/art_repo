import { useState, MouseEvent, KeyboardEvent, ReactNode } from 'react'
import {
  Fab,
  Drawer,
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemButton,
  Typography,
} from '@mui/material'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'

import { tertiary } from '../utils/colors'

const menuSections: {
  name: string
  href: string
  icon: ReactNode
  textColor?: string
}[] = [
  {
    name: 'Artwork Gallery',
    href: '/gallery',
    icon: <ColorLensIcon color="primary" />,
    textColor: 'primary',
  },
  {
    name: 'Artist Hall',
    href: '/hall',
    icon: <AccountBoxIcon color="secondary" />,
    textColor: 'secondary',
  },
  {
    name: 'Authenticate',
    href: '/auth',
    icon: <LoginIcon sx={{ fill: tertiary.main }} />,
  },
  {
    name: 'Register',
    href: '/auth',
    icon: <AppRegistrationIcon sx={{ fill: tertiary.main }} />,
  },
]

const Navigation = () => {
  const anchor = 'left'

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
                <ListItemButton href={section.href}>
                  <ListItemIcon>{section.icon}</ListItemIcon>
                  <Typography>{section.name}</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      ¨
    </>
  )
}

export default Navigation

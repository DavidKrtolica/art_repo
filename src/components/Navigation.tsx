import { useState, MouseEvent, KeyboardEvent } from 'react'
import {
  Fab,
  Drawer,
  List,
  ListItem,
  Box,
  ListItemIcon,
  ListItemButton,
  Typography,
  Divider,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow'
import ColorLensIcon from '@mui/icons-material/ColorLens'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import LoginIcon from '@mui/icons-material/Login'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import HomeIcon from '@mui/icons-material/Home'

import { NavSection } from '../utils/types'

const Navigation = () => {
  const theme = useTheme()
  console.log(theme.palette)
  const navSections: NavSection[] = [
    {
      name: 'Home',
      href: '/',
      icon: <HomeIcon />,
      noText: true,
    },
    {
      name: 'Artwork Gallery',
      href: '/gallery',
      icon: <ColorLensIcon color="primary" />,
      textColor: 'primary',
      topDivider: true,
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
      icon: <LoginIcon sx={{ fill: `${theme.palette.tertiary.main}` }} />,
      topDivider: true,
    },
    {
      name: 'Register',
      href: '/auth',
      icon: (
        <AppRegistrationIcon sx={{ fill: `${theme.palette.tertiary.main}` }} />
      ),
    },
  ]
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
            {navSections.map((section) => (
              <>
                {section.topDivider && <Divider />}
                <ListItem key={section.name} disablePadding>
                  <ListItemButton href={section.href}>
                    <ListItemIcon>{section.icon}</ListItemIcon>
                    {!section.noText && <Typography>{section.name}</Typography>}
                  </ListItemButton>
                </ListItem>
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navigation

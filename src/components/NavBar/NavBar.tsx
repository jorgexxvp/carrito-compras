import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
  AppBar, Box, IconButton, Toolbar, Typography
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'

import { LogoIcon } from '../../toolbox/constants/icons'
import { MenuComponent } from '../Menu'
import styles from './NavBar.module.sass'

export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <AppBar position='static' sx={{ backgroundColor: '#009640' }}>
      <Toolbar className={styles.TabBar}>
        <Box className={styles.Logo}>
          <LogoIcon />
        </Box>
        <Box className={styles.LeftContent}>
          <IconButton
            sx={{
              margin: '0px',
              padding: '0px'
            }}
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={() => {
              navigate('/record')
            }}
            color='inherit'
          >
            <Typography variant='h6' component='div' sx={{
              flexGrow: 1,
              fontSize: 'clamp(0.75rem, 0.583rem + 0.741vw, 1.25rem)'
            }}>
              Historial
            </Typography>
          </IconButton>
          <IconButton
            sx={{
              margin: '0px',
              padding: '0px'
            }}
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <Typography variant='h6' component='div' sx={{
              flexGrow: 1,
              fontSize: 'clamp(0.75rem, 0.583rem + 0.741vw, 1.25rem)'
            }}>
              Carrito
            </Typography>
            <AddShoppingCartIcon />
          </IconButton>
          <MenuComponent anchorEl={anchorEl} OnClose={handleClose} />
        </Box>
      </Toolbar>
    </AppBar >
  )
}

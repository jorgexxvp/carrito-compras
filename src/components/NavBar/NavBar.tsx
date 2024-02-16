import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import {
  AppBar, IconButton, Menu, MenuItem,
  Toolbar, Typography
} from '@mui/material'
import { useState } from 'react'

import { LogoIcon } from '../../toolbox/constants/icons'


export const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)


  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position='static'>
      <Toolbar>
        <img src={LogoIcon} />
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Photos
        </Typography>
        <div>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleMenu}
            color='inherit'
          >
            <AddShoppingCartIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar >
  )
}

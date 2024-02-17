import {
  Box, Button, Menu
} from '@mui/material'
import {
  FC, MouseEvent, useCallback, useEffect
} from 'react'

import { useCart } from '../../assets/zustand/CartState'
import { Product } from '../Cards/Products'
import styles from './Menu.module.sass'

interface IMenuProps {
  anchorEl: null | HTMLElement;
  OnClose: () => void;
}

export const MenuComponent: FC<IMenuProps> = ({
  anchorEl, OnClose
}) => {
  const {
    cart, setCart
  } = useCart()

  const handleCloseMenu = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      const target = event.target as HTMLElement
      if (target.contains(anchorEl)) {
        return
      }
      OnClose()
    },
    [anchorEl, OnClose]
  )

  const handleClick = () => {
    const currentDate = new Date()
    const previousRecords = JSON.parse(localStorage.getItem('Record') || '[]')
    const newRecord = {
      items: cart,
      date: `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()} a las ${currentDate.getHours()}:${currentDate.getMinutes()}`
    }

    const updatedRecords = [...previousRecords, newRecord]

    localStorage.setItem('Record', JSON.stringify(updatedRecords))

    setCart([])
    localStorage.removeItem('Cart')

    alert('Se ha realizado el pago')
    OnClose()
  }


  useEffect(() => {
    setCart(cart)
  }, [cart])

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={OnClose}
      onMouseLeave={handleCloseMenu}
    >
      <Box className={styles.Menu}>
        <Box className={styles.MenuBody}>
          {cart && cart.length > 0 ? <>
            {
              cart.map((product, index) =>
                <Product key={index} product={product} />
              )
            } </> : <Box>Agrege productos al carrito de compras</Box>
          }
        </Box>
        {cart && cart.length > 0 &&
          <Button className={styles.Button} onClick={handleClick}>PROCEDER CON EL PAGO</Button>
        }
      </Box>
    </Menu >
  )
}


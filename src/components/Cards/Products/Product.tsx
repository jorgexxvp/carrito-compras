import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import {
  Box, Button, Typography
} from '@mui/material'
import { FC } from 'react'

import { IProductResponse } from '../../../core/domain/models/Products'
import { FormatText } from '../../../toolbox/helpers/FormatText'
import { useCart } from '../../../zustand/CartState'
import styles from './Product.module.sass'

interface IProductsProps extends IProductResponse {
  cantidad: number;
}

interface IProps {
  product: IProductsProps
}

export const Product: FC<IProps> = ({ product }) => {

  const { setCart } = useCart()

  const handleAddProduct = () => {
    const updatedCantidad = product.cantidad + 1
    updateCart(updatedCantidad)
  }

  const handleRemoveProduct = () => {

    const updatedCantidad = product.cantidad - 1
    if (updatedCantidad === 0) {
      deleteProduct()
    } else {
      updateCart(updatedCantidad)
    }
    return updatedCantidad

  }

  const deleteProduct = () => {
    const prevData: IProductsProps[] = JSON.parse(localStorage.getItem('Cart') as string) || []
    const updatedData = prevData.filter(item => item.id !== product.id)
    setCart(updatedData)
    localStorage.setItem('Cart', JSON.stringify(updatedData))
  }

  const updateCart = (updatedCantidad: number) => {
    const prevData: IProductsProps[] = JSON.parse(localStorage.getItem('Cart') as string)

    const existingProductIndex = prevData.findIndex(item => item.id === product.id)
    if (existingProductIndex > -1) {
      prevData[existingProductIndex].cantidad = updatedCantidad
    }
    setCart(prevData)
    localStorage.setItem('Cart', JSON.stringify(prevData))
  }

  return (

    <Box className={styles.Card}>
      <Box className={styles.CardBody}>
        <figure className={styles.Image}>
          <img src={product.image} alt='image' />
        </figure>
        <Box className={styles.BodyBottom}>
          <Typography sx={{ fontSize: 'clamp(0.75rem, 0.583rem + 0.741vw, 1.25rem)' }}>$/.{product.price}</Typography>
          <Typography sx={{ fontSize: 'clamp(0.75rem, 0.583rem + 0.741vw, 1.25rem)' }}>{FormatText(product.title, 15)}</Typography>
          <Typography sx={{ fontSize: 'clamp(0.75rem, 0.583rem + 0.741vw, 1.25rem)' }}>Cantidad: {product.cantidad}</Typography>
        </Box>
      </Box>
      <Box className={styles.ButtonGroup}>
        <Button className={styles.Button} startIcon={<RemoveIcon />} onClick={handleRemoveProduct} />
        <Button className={styles.Button} startIcon={<AddIcon />} onClick={handleAddProduct} />
      </Box>
    </Box>


  )
}

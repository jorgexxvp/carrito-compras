import AddIcon from '@mui/icons-material/Add'
import {
  Box,
  Button,
  Pagination,
  Rating,
  Typography
} from '@mui/material'
import React, { FC } from 'react'

import { IProductResponse } from '../../core/domain/models/Products'
import { FirstLetter } from '../../toolbox/helpers/FirstLetter'
import { FormatText } from '../../toolbox/helpers/FormatText'
import { useCart } from '../../zustand/CartState'
import { usePage } from '../../zustand/pageState'
import styles from './GroupProducts.module.sass'
interface IGroupProductsProps {
  rows: IProductResponse[]

}

interface IProductsProps extends IProductResponse {
  cantidad: number;
}


interface ICardProps {
  product: IProductResponse
}


export const GroupProducts: FC<IGroupProductsProps> = ({ rows }) => {
  const {
    page, setPage
  } = usePage()

  const rowsPerPage = 5

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {

    setPage(newPage)
  }

  return (
    <Box>

      <Box className={styles.GroupCard}>
        {rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row, index) => (
          <Card key={index} product={row} />
        ))}
      </Box>

      <Box className={styles.Pagination} >
        <Pagination
          count={Math.ceil(rows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          variant='outlined'
          shape='rounded'
        />
      </Box>
    </Box>
  )
}

const Card: FC<ICardProps> = ({ product }) => {
  const { setCart } = useCart()

  const handleAddProduct = (data: IProductsProps) => {
    const prevData: IProductsProps[] = JSON.parse(localStorage.getItem('Cart') as string) || []

    const existingProductIndex = prevData.findIndex(product => product.id === data.id)

    if (existingProductIndex !== -1) {
      prevData[existingProductIndex].cantidad += 1
    } else {
      data.cantidad = 1
      prevData.push(data)
    }

    setCart(prevData)
    localStorage.setItem('Cart', JSON.stringify(prevData))
    alert('Se ha agregado el producto')
  }

  return (
    <Box className={styles.Card}>
      <Box className={styles.CardBody}>
        <figure className={styles.Image}>
          <img src={product.image} />
        </figure>
        <Typography>Categoria - {FirstLetter(product.category)}</Typography>
        <Typography>$/.{product.price}</Typography>
        <Typography> {FormatText(product.title, 30)}</Typography>
        <Box className={styles.Rate}>
          <Typography>Valoracion</Typography>
          <Rating
            name='value'
            value={product.rating.rate}
          />
        </Box>
      </Box>

      <Button className={styles.Button} startIcon={<AddIcon />} onClick={() => handleAddProduct({
        ...product,
        cantidad: 0
      })}>AGREGAR</Button>

    </Box>
  )
}


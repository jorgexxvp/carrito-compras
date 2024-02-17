import {
  Box,
  Hidden,
  Pagination,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery
} from '@mui/material'
import { FC } from 'react'

import { usePage } from '../../assets/zustand/pageState'
import { IProductResponse } from '../../core/domain/models/Products'
import { FormatText } from '../../toolbox/helpers/FormatText'
import styles from './Table.module.sass'

interface IProductsProps extends IProductResponse {
  cantidad: number;
}

interface ITableProps {
  rows: IProductsProps[]
  columns: string[]
}

export const TableComponent: FC<ITableProps> = ({
  columns, rows
}) => {

  const {
    page, setPage
  } = usePage()

  const rowsPerPage = 5

  const handleChangePage = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage)
  }

  const isSm = useMediaQuery('(min-width: 600px)')

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 200 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              {columns.map((column, index) =>
                <TableCell key={index} align='center'>{column}</TableCell>
              )}

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align='right'>{row.id}</TableCell>
                <Hidden smDown>
                  <TableCell align='right'>
                    <figure className={styles.Image}>
                      <img src={row.image} alt='table-image' />
                    </figure>
                  </TableCell>
                </Hidden>
                <TableCell>{FormatText(row.title, isSm ? 15 : 50)}</TableCell>
                <Hidden smDown>
                  <TableCell align='right'>{row.category}</TableCell>
                </Hidden>
                <TableCell align='right'>$/.{row.cantidad * row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={styles.Pagination}>
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
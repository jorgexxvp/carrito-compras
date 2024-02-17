import {
  Box,
  Hidden,
  Pagination,
  Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, useMediaQuery
} from '@mui/material'
import {
  FC, useState
} from 'react'

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

  const [
    page, setPage
  ] = useState(1)

  const rowsPerPage = 5

  const handleChangePage = (_event: React.ChangeEvent<unknown>, newPage: number) => {
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
                <TableCell key={index}>{column}</TableCell>
              )}

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{row.id}</TableCell>
                <Hidden smDown>
                  <TableCell >
                    <figure className={styles.Image}>
                      <img src={row.image} alt='table-image' />
                    </figure>
                  </TableCell>
                </Hidden>
                <TableCell>{FormatText(row.title, isSm ? 15 : 50)}</TableCell>
                <Hidden smDown>
                  <TableCell >{row.category}</TableCell>
                </Hidden>
                <TableCell>$/.{row.cantidad * row.price}</TableCell>
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
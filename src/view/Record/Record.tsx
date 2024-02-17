import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import {
  Box, IconButton, Typography, useMediaQuery
} from '@mui/material'
import { useNavigate } from 'react-router'

import { NavBar } from '../../components/NavBar'
import { TableComponent } from '../../components/Table'
import { IProductResponse } from '../../core/domain/models/Products'
import styles from './Record.module.sass'
interface IProductsProps extends IProductResponse {
  cantidad: number;
}

interface IRecord {
  date: string
  items: IProductsProps[]
}

export const Record = () => {

  const isSm = useMediaQuery('(min-width: 600px)')

  const columns = isSm ? ['Id', 'Image', 'Title', 'Category', 'SubTotal'] : ['Id', 'Title', 'SubTotal']
  const prevData: IRecord[] = JSON.parse(localStorage.getItem('Record') as string) || []
  const navigate = useNavigate()

  return (

    <Box className={styles.HomeBody}>
      <NavBar />
      <Box className={styles.Layout}>
        <Box className={styles.GroupButton}>
          <IconButton
            sx={{
              margin: '0px',
              padding: '0px'
            }}
            size='large'

            onClick={() => {
              navigate('/')
            }}
            color='inherit'
          >
            <ArrowBackIcon />
          </IconButton>
          <Typography sx={{ fontSize: '30px' }}>Historial</Typography>
        </Box>
        {prevData && prevData.length < 1 ? <Box>No ha realizado ninguna compra</Box> :
          <Box className={styles.TableGroup}>
            {prevData.map((record, index) =>
              <Box key={index} className={styles.TableContent}>
                <Typography>Compra hecha el dia {record.date}</Typography>
                <TableComponent columns={columns} rows={record.items} />
              </Box>
            )
            }
          </Box>
        }
      </Box>
    </Box>
  )
}

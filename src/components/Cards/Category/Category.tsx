import {
  Box, Typography
} from '@mui/material'
import { FC } from 'react'

import { FirstLetter } from '../../../toolbox/helpers/FirstLetter'
import styles from './Category.module.sass'

interface ICategoryProps {
  title: string
  image: string
  onClick: (title: string) => void
}

export const Category: FC<ICategoryProps> = ({
  title, image, onClick
}) => {

  return (
    <Box className={styles.CardBody} onClick={() => onClick(title)}>
      <figure className={styles.Image}>
        <img src={image} alt='category' />
      </figure>
      <Typography sx={{ fontSize: 'clamp(0.75rem, 0.583rem + 0.741vw, 1.25rem)' }}>{FirstLetter(title)}</Typography>
    </Box>
  )
}
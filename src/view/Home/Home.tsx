
import { Box } from '@mui/material'
import {
  useEffect, useState
} from 'react'

import { usePage } from '../../assets/zustand/pageState'
import { Category } from '../../components/Cards/Category'
import { GroupProducts } from '../../components/GroupProducts/GroupProducts'
import { NavBar } from '../../components/NavBar'
import { IProductResponse } from '../../core/domain/models/Products'
import {
  ElectronicImage, JeweleryImage, MenClothing, WomanClothing
} from '../../toolbox/constants/icons'
import {
  useGeCategories, useGetProducts
} from './Home.hook'
import styles from './Home.module.sass'
export const Home = () => {

  const { data: productData } = useGetProducts()
  const { data: categoryData } = useGeCategories()
  const categoryImage = [ElectronicImage, JeweleryImage, MenClothing, WomanClothing]
  const { setPage } = usePage()

  const [filterData, setFilterData] = useState<IProductResponse[]>([])

  const HandleCategory = (title: string) => {
    const Filter = productData?.filter((product) => product.category === title)
    setFilterData(Filter)
    setPage(1)
  }

  useEffect(() => {
    if (productData) {
      setFilterData(productData)
    }
  }, [productData])


  return (
    <Box className={styles.HomeBody}>
      <NavBar />
      <Box className={styles.Layout}>
        <Box className={styles.CategorySection}>
          {categoryData.map((category, idx) =>
            <Category onClick={HandleCategory} key={idx} title={category} image={categoryImage[idx]} />
          )}
        </Box>
        <GroupProducts rows={filterData} />
      </Box>

    </Box>
  )
}

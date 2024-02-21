import {
  FC, useEffect
} from 'react'
import {
  Route, Routes, useNavigate
} from 'react-router-dom'

import { Home } from '../view/Home/Home'
import { Record } from '../view/Record/Record'

const NotFoundPage: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      navigate('/')
    }
  }, [])
  return null
}

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/record' element={<Record />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default AllRoutes
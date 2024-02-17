import './App.css'

import { QueryContextProvider } from './core/contexts/QueryContext'
import AllRoutes from './routes/AllRoutes'



function App() {
  return (
    <QueryContextProvider>
      <AllRoutes />
    </QueryContextProvider>
  )
}

export default App

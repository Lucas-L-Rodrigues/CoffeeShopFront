import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Cart } from './pages/Cart'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        </Route>

        <Route path='/Login' element={<Layout />}>
          <Route index element={<Login />}/>
        </Route>

        <Route path='/Cart' element={<Layout />}>
          <Route index element={<Cart />}/>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

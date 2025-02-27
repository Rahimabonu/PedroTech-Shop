import { Routes,Route } from 'react-router'
import './App.css'
import Navbar from './components/navbar'
import Shop from './pages/shop'
import Contacts from './pages/contacts'
import Cart from './pages/cart'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App

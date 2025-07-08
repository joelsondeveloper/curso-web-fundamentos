
import './App.css'

import { Outlet } from 'react-router-dom'

// 5 -  link entre paginas 
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom'

// componentes
import Navbar from './components/Navbar'

import './App.css'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

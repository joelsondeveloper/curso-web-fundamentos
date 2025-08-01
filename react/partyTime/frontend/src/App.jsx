import { Outlet } from 'react-router-dom'

// componentes
import Navbar from './components/Navbar'

import {ToastContainer} from 'react-toastify'

import './App.css'
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className='app'>
      <ToastContainer />
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App

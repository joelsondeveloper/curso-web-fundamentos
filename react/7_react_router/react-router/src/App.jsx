
import './App.css'

import { Outlet } from 'react-router-dom'

// 5 -  link entre paginas 
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

function App() {

  return (
    <>
      <Navbar />
      <SearchForm />
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default App

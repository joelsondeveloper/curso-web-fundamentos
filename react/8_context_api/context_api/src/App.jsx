
import Navbar from "./components/Navbar"

import {Outlet} from "react-router-dom"

import './App.css'

function App() {

  return (
    <div className="app">
      <Navbar />
      <h1>context API</h1>
      <Outlet />
    </div>
  )
}

export default App

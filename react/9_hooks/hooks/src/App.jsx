import {Outlet, Link} from "react-router-dom"

import './App.css'

function App() {

  return (
    <div className='app'>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contatos</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  )
}

export default App

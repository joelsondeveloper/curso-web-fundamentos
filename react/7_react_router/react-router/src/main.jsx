import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// 1 - configurando router 
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom"

import Contact from './routes/Contact.jsx'

// 2 - pagina de erro 
import ErrorPage from './routes/ErrorPage.jsx'

// 3 - componente base 
import Home from './routes/Home.jsx'

// 7 - rota dinamica
import Product from './routes/Product.jsx'

// 8 - rotas aninhadas
import Info from './routes/Info.jsx'

// 9 - search params 
import Search from './routes/Search.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 3 - componente base 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      // 7 - rota dinamica
      {
        path: "products/:id",
        element: <Product />
      },
      // 8 - rotas aninhadas
      {
        path: "products/:id/info",
        element: <Info />
      },
      // 9 - search params 
      {
        path: "search", 
        element: <Search />
      }
    ]
  },
  // {
  //   path: "contact",
  //   element: <Contact />
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

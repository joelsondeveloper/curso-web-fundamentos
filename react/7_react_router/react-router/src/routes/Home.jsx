import React from 'react'

// 6 - carregamento de dados 
import {useFetch} from "../hooks/useFetch"

const Home = () => {

    const url = "http://localhost:5173/products"

    const {data: items} = useFetch(url)

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home

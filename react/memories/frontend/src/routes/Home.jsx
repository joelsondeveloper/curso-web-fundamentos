import axios from "axios"

import { useState, useEffect } from "react"

import { Link } from "react-router-dom"

const Home = () => {

    const [memories, setMemories] = useState([])

  return (
    <div className="home">
      <h2>Confira as ultimas Memórias</h2>
      <div className="memories">
    </div>
  )
}

export default Home

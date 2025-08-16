import "./Home.css";

import axios from "../axios-config"

import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Home = () => {
  const [memories, setMemories] = useState([]);

  useEffect(() => {
    const getMemories = async () => {
      try {
        const res = await axios.get("http://localhost:3000/memories");
        setMemories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMemories();
  }, []);

  return (
    <div className="home">
      <h2>Confira as ultimas Memórias</h2>
      <div className="memories-container">
        {memories.length > 0 && memories.map((memory) => (
          <div className="memory" key={memory._id}>
            <img src={`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
            <p>{memory.title}</p>
            <Link to={`/memories/${memory._id}`} className="btn">Comentar</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

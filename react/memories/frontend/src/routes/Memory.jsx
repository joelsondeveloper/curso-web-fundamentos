import axios from "../axios-config";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { toast } from "react-toastify";

import "./Memory.css";

const Memory = () => {
  const { id } = useParams();

  const [memory, setMemory] = useState(null);
  const [comments, setComments] = useState([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const getMemory = async () => {
      try {
        const res = await axios.get(`/memories/${id}`);
        setMemory(res.data);
        setComments(res.data.comments);
      } catch (error) {
        console.log(error);
      }
    };
    getMemory();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const comment = { name, text: message };
      const res = await axios.post(`/memories/${memory._id}/comment/`, comment);
      const lastComment = res.data.memory.comments.pop();
      setComments([...comments, lastComment]);
      setName("");
      setMessage("");

      toast.success(res.data.msg);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  if (!memory) return <p>Loading...</p>;

  return (
    <div className="memory-page">
      <img src={`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
      <h2>{memory.title}</h2>
      <p>{memory.description}</p>
      <div className="comment-form">
        <h3>Envie um comentário</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <textarea
              placeholder="Sua mensagem"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
          <input type="submit" value="Enviar" className="btn" />
        </form>
      </div>
      <div className="comments-container">
        <h3>Comentarios ({comments.length})</h3>
        {comments.length === 0 && <p>Este post ainda nao possui comentarios</p>}
        {comments.length > 0 &&
          comments.map((comment) => (
            <div className="comment" key={comment._id}>
              <p className="comment-name">{comment.name}</p>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Memory;

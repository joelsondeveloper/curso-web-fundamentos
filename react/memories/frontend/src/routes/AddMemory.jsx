import "./AddMemory.css"

import axios from "axios"

import { toast } from "react-toastify"

import { useNavigate } from "react-router-dom"

import { useState } from "react"

const AddMemory = () => {

    const [inputs, setInputs] = useState({})
    const [image, setImage] = useState(null)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append("title", inputs.title)
        formData.append("description", inputs.description)
        formData.append("image", image)

        
        try {
            
            const res = await axios.post("http://localhost:3000/memories", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            
            console.log(res)
            toast.success(res.data.msg)
            navigate("/")
            
        } catch (error) {
            console.log(error)
            toast.error(error.response.data.error)
        }
    }

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setImage(e.target.files[0])
        } else {
            setInputs({...inputs, [e.target.name]: e.target.value})
        }
    }

  return (
    <div className="add-memory-page">
      <h2>Crie uma nova memória</h2>
      <form onSubmit={handleSubmit}>
        <label>
            <p>Titulo:</p>
            <input type="text" placeholder="defina um título" name="title" onChange={handleChange} />
        </label>
        <label>
            <p>Descrição:</p>
            <input type="text" placeholder="Explique o que você quer lembrar" name="description" onChange={handleChange}/>
        </label>
        <label>
            <p>Foto:</p>
            <input type="file" name="image" onChange={handleChange}/>
        </label>
        <input type="submit" value="Enviar" className="btn"/>
      </form>
    </div>
  )
}

export default AddMemory
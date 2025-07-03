import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ userName, userEmail}) => {
  // 3 - gerenciamento de dados
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5 - envio de formulários
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role);

    // validação 
    // envio 

    // 7 - limpando formulários
    setName("");
    setEmail("");
    setBio("");
    setRole("");
  };

  console.log(name, email, bio, role);

  return (
    <div>
      {/* 1 - criação de form  */}
      {/* 5 - envio de formulários */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
            // 6 - controlled inputs
            value={name || ""}
          />
        </div>
        {/* 2 - label envolvendo o input */}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu e-mail"
            // 4 - simplificando manipulação
            onChange={(e) => setEmail(e.target.value)}
            // 6 - controlled inputs
            value={email || ""}
          />
        </label>
        {/* 8 - textarea */}
        <label>
          <span>Mensagem:</span>
          <textarea
            name="message"
            placeholder="Digite sua mensagem"
            // 4 - simplificando manipulação
            onChange={(e) => setBio(e.target.value)}
            // 6 - controlled inputs
            value={bio || ""}
          />
        </label>
        {/* 9 - select */}
        <label>
          <span>Função no sisteema:</span>
          <select
            name="role"
            // 4 - simplificando manipulação
            onChange={(e) => setRole(e.target.value)}
            // 6 - controlled inputs
            value={role || ""}
          >
            <option value="user">User</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;

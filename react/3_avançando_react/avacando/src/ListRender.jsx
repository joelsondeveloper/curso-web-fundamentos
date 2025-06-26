import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Pedro", "Bia", "Ana"]);

  const [users, setUsers] = useState([
    { id: "1", name: "Pedro", age: 21 },
    { id: "2", name: "Bia", age: 25 },
    { id: "3", name: "Ana", age: 19 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== Number(user.id))
    );
  };

  return (
    <div>
      {/* 4 - render sem key */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* 5 - render com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - previous state  */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;

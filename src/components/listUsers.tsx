import { useState } from "react";
import { _axios } from "../services/axios";
import { User } from "../@types";

export const ListUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await _axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      alert(`Erro ao listar usuários: ${error}`);
    }
  };

  return (
    <div style={formStyle}>
      <h3>Listar Usuários</h3>
      <button onClick={getUsers}>Listar Todos</button>
      {users.length > 0 && (
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Nome</th>
              <th style={thStyle}>Sobrenome</th>
              <th style={thStyle}>Idade</th>
              <th style={thStyle}>Altura (cm)</th>
              <th style={thStyle}>Peso (kg)</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td style={tdStyle}>{user.id}</td>
                <td style={tdStyle}>{user.nome}</td>
                <td style={tdStyle}>{user.sobrenome}</td>
                <td style={tdStyle}>{user.idade}</td>
                <td style={tdStyle}>{user.altura}</td>
                <td style={tdStyle}>{user.peso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const formStyle = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "10px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
};

const tableStyle = {
  marginTop: "20px",
  borderCollapse: "collapse" as const,
  width: "100%",
};

const thStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
  textAlign: "left" as const,
};

const tdStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
};

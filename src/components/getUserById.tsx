import { useState } from "react";
import { _axios } from "../services/axios";
import { User } from "../@types";

export const GetUserById = () => {
  const [userId, setUserId] = useState<string>("");
  const [user, setUser] = useState<User | null>(null);

  const getUserById = async () => {
    try {
      const response = await _axios.get(`/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      alert(`Erro ao obter usuário: ${error}`);
    }
  };

  return (
    <div style={formStyle}>
      <h3>Obter Usuário por ID</h3>
      <input
        type="text"
        placeholder="ID do Usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={getUserById}>Buscar</button>
      {user && (
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
            <tr>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.nome}</td>
              <td style={tdStyle}>{user.sobrenome}</td>
              <td style={tdStyle}>{user.idade}</td>
              <td style={tdStyle}>{user.altura}</td>
              <td style={tdStyle}>{user.peso}</td>
            </tr>
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
  backgroundColor: "#f2f2f2",
};

const tdStyle = {
  borderBottom: "1px solid #ddd",
  padding: "8px",
};

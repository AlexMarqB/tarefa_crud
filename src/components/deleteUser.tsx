import { useState } from "react";
import { _axios } from "../services/axios";

export const DeleteUser = () => {
  const [userId, setUserId] = useState<string>("");

  const deleteUser = async () => {
    try {
      await _axios.delete(`/users/${userId}`);
      alert("Usuário deletado com sucesso!");
      setUserId("");
    } catch (error) {
      alert(`Erro ao deletar usuário: ${error}`);
    }
  };

  return (
    <div style={formStyle}>
      <h3>Deletar Usuário</h3>
      <input
        type="text"
        placeholder="ID do Usuário"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <button onClick={deleteUser}>Deletar</button>
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

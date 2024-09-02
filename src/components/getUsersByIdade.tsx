import { useState } from "react";
import { _axios } from "../services/axios"; // Importando o esquema de validação
import { User } from "../@types";

export const GetUsersByIdade = () => {
    const [idade, setIdade] = useState<number | "">("");
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string>("");

    const getUserByIdade = async () => {
        if(typeof(idade) !== "number") {
            setError("Idade invalida!")
        }

        setError("");

        try {
            const response = await _axios.get(`/users?idade=${idade}`);
            setUsers(response.data);
        } catch (error) {
            alert(`Erro ao obter usuários: ${error}`);
        }
    };

    return (
        <div style={formStyle}>
            <h3>Buscar Usuários por Idade</h3>
            <label>
                Idade:
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade === "" ? "" : idade}
                    onChange={(e) => setIdade(Number(e.target.value))}
                />
                {error && <span style={{ color: 'red' }}>{error}</span>}
            </label>
            <button onClick={getUserByIdade}>Buscar</button>
            {users.length > 0 && (
                <div style={{ marginTop: "10px" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Idade</th>
                                <th>Altura</th>
                                <th>Peso</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.nome}</td>
                                    <td>{user.sobrenome}</td>
                                    <td>{user.idade}</td>
                                    <td>{user.altura}</td>
                                    <td>{user.peso}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
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

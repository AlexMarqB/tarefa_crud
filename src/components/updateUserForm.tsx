import React, { useState } from "react";

import { _axios } from "../services/axios";
import { User } from "../@types";

export const UpdateUserForm = () => {
	const [userId, setUserId] = useState<string>("");
	const [formData, setFormData] = useState<User>({
		nome: "",
		sobrenome: "",
		idade: 0,
		altura: 0,
		peso: 0,
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			await _axios.put(`/users/${userId}`, formData);
			alert("Usuário atualizado com sucesso!");
			setFormData({ nome: "", sobrenome: "", idade: 0, altura: 0, peso: 0 });
		} catch (error) {
			alert(`Erro ao atualizar usuário: ${error}`);
		}
	};

	return (
		<form onSubmit={handleSubmit} style={formStyle}>
			<h3>Atualizar Usuário</h3>

			<label>
				ID do Usuário:
				<input
					type="text"
					placeholder="ID do Usuário"
					value={userId}
					onChange={(e) => setUserId(e.target.value)}
				/>
			</label>

			<label>
				Nome:
				<input
					type="text"
					name="nome"
					placeholder="Nome"
					value={formData.nome}
					onChange={handleChange}
				/>
			</label>

			<label>
				Sobrenome:
				<input
					type="text"
					name="sobrenome"
					placeholder="Sobrenome"
					value={formData.sobrenome}
					onChange={handleChange}
				/>
			</label>

			<label>
				Idade:
				<input
					type="number"
					name="idade"
					placeholder="Idade"
					value={formData.idade}
					onChange={handleChange}
				/>
			</label>

			<label>
				Altura (cm):
				<input
					type="number"
					name="altura"
					placeholder="Altura"
					value={formData.altura}
					onChange={handleChange}
				/>
			</label>

			<label>
				Peso (kg):
				<input
					type="number"
					name="peso"
					placeholder="Peso"
					value={formData.peso}
					onChange={handleChange}
				/>
			</label>

			<button type="submit">Atualizar</button>
		</form>
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

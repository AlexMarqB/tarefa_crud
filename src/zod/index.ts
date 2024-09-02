// src/schemas/userSchema.ts
import { z } from 'zod';

export const userSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  sobrenome: z.string().min(1, "Sobrenome é obrigatório"),
  idade: z.number().min(0, "Idade deve ser um número positivo").max(120, "Idade deve ser um número válido"),
  altura: z.number().min(0, "Altura deve ser um número positivo"),
  peso: z.number().min(0, "Peso deve ser um número positivo"),
});



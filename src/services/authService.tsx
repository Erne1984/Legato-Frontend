import api from "@/libs/axios";
import { LoginDTO, RegisterUserDTO } from "@/types/DTOS";
import { AuthResponse } from "@/types/response";
import { QueryClient } from "@tanstack/react-query";

export async function registerUser(data: RegisterUserDTO): Promise<AuthResponse> {
  const res = await api.post("/auth/register", data);
  return res.data;
}

export async function loginUser(data: LoginDTO): Promise<AuthResponse> {
  const res = await api.post("/auth/login", data);
  return res.data;
}

export function logout(queryClient: QueryClient) {

  localStorage.removeItem("token");

  queryClient.removeQueries({ queryKey: ["me"] });
}
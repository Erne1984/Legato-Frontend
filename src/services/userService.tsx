import api from "@/libs/axios";
import { ApiResponse, UpdateUserDTO, User } from "@/types/response";

// GET

export async function fetchCurrentUser(): Promise<ApiResponse<User>> {
    const res = await api.get("/users/me");
    return res.data;
}

export async function fetchUserByUsername(username: string): Promise<ApiResponse<User>> {
    const res = await api.get(`/users/${username}`)
    return res.data;
}

export async function fetchUserConnections(): Promise<ApiResponse<User>> {
    const res = await api.get(`/users/connections`)
    return res.data;
}

export async function getUsers(): Promise<ApiResponse<User[]>> {
    const res = await api.get("/users");
    return res.data;
}

export async function getUserConnections(): Promise<ApiResponse<User[]>> {
    const res = await api.get("/users/connections");
    return res.data;
}

export async function getUserFollowers(id: number): Promise<ApiResponse<User[]>> {
    const res = await api.get(`/users/followers/${id}`);
    return res.data;
}

export async function postSendConnectionUser(id: number): Promise<ApiResponse<User>> { 
    const res = await api.post(`/users/followers/${id}`);
    return res.data;
}

// PUT

export async function putUpdateUser(data: Partial<UpdateUserDTO>): Promise<ApiResponse<User>> {
  const res = await api.put(`/users`, data);
  return res.data;
}
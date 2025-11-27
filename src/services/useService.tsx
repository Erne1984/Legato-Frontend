import api from "@/libs/axios";
import { ApiResponse, User } from "@/types/response";

export async function fetchCurrentUser(): Promise<ApiResponse<User>> {
    const res = await api.get("/users/me");
    return res.data;
}

export async function fetchUserByUsername(username: string): Promise<ApiResponse<User>> {
    const res = await api.get(`users/${username}`)

    return res.data;
}
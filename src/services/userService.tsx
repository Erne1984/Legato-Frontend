import api from "@/libs/axios";
import { ApiResponse, UpdateUserDTO, User } from "@/types/response";

// GET
export async function fetchCurrentUser(): Promise<ApiResponse<User>> {
    const res = await api.get("/users/me");
    return res.data;
}

export async function fetchUserByUsername(username: string): Promise<ApiResponse<User>> {
    const res = await api.get(`/users/${username}`);
    return res.data;
}

// Removido fetchUserConnections - duplicado com getUserConnections

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

export async function putUploadUserImage(type: string, file: File): Promise<ApiResponse<User>> {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("file", file);

    const res = await api.put(`/users/upload-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
}

export async function putUploadUserCardImage(index: number, file: File): Promise<ApiResponse<User>> {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("index", index.toString());

    const res = await api.put(`/users/card-image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
}

// DELETE
export async function deleteUserCardPhoto(userId: number, photoIndex: number) {
    const res = await api.delete(`/users/${userId}/cards/${photoIndex}`)

    return res.data;
}
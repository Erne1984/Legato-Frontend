import api from "@/libs/axios";
import { QueryClient } from "@tanstack/react-query";

export interface RegisterUserDTO {
  email: string;
  password: string;
  role: "USER";
  username: string;
  displayName: string;
}

export interface LoginDTO {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  displayName: string;
  profilePicture: string | null;
  profileBanner: string | null;
  photosCard: string[];
  sex: string | null;
  instruments: string[];
  favoriteArtistsSpotifyId: string[];
  genres: string[];
  goal: string | null;
  location: string | null;
  links: string | null;
  createdAt: string;
  updatedAt: string;
  followersCount: number;
  followingCount: number;
  connectionsCount: number;
  blockedCount: number;
  sentRequestsCount: number;
  receivedRequestsCount: number;
  connectionIds: number[];
  followerIds: number[];
  followingIds: number[];
}

export interface AuthResponse {
  token: string;
  user: User;
}

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
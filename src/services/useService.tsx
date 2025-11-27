import api from "@/libs/axios";

export async function fetchCurrentUser() {
    const res = await api.get("/users/me");
    return res.data;
}
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

const publicRoutes = ["/auth/login", "/auth/register"];

api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");

  if (token && !publicRoutes.includes(config.url!)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;

    if (status === 401 || status === 403) {
      return Promise.reject(error);
    }

    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;

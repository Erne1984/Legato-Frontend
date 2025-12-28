import { jwtDecode } from "jwt-decode";

export function isTokenValid(): boolean {
  const token = typeof window !== "undefined"
    ? localStorage.getItem("token")
    : null;

  if (!token) return false;

  try {
    const decoded = jwtDecode<{ exp?: number }>(token);

    if (!decoded.exp) return false;

    const now = Date.now() / 1000;
    return decoded.exp > now;
  } catch {
    return false;
  }
}

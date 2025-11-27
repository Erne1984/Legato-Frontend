import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser, RegisterDTO, LoginDTO } from "@/services/authService";
import { useRouter } from "next/navigation";

export function useRegister() {
  const router = useRouter();
    return useMutation({
        mutationFn: (data: RegisterDTO) => registerUser(data),
        onSuccess: (data) => {
            localStorage.setItem("token", data.token);
            router.push(`/users/${data.user.username}`);
        },
    });
}

export function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: LoginDTO) => loginUser(data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      router.push(`/users/${data.user.username}`);
    },
  });
}
import { useMutation } from "@tanstack/react-query";
import { loginUser, registerUser} from "@/services/authService";
import { useRouter } from "next/navigation";
import { LoginDTO, RegisterUserDTO } from "@/types/DTOS";

export function useRegister() {
  const router = useRouter();
    return useMutation({
        mutationFn: (data: RegisterUserDTO) => registerUser(data),
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
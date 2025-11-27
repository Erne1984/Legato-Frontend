import { fetchCurrentUser, fetchUserByUsername } from "@/services/useService";
import { useQuery } from "@tanstack/react-query";

export function useMe() {
    return useQuery({
        queryKey: ["me"],
        queryFn: fetchCurrentUser,
        retry: false,
    });
}

export function useFindByUsername(username: string) {
    return useQuery({
        queryKey: ["user", username],
        queryFn: () => fetchUserByUsername(username),
        enabled: !!username,
    });
}
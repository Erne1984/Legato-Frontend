import { fetchCurrentUser } from "@/services/useService";
import { useQuery } from "@tanstack/react-query";



export function useMe() {
    return useQuery({
        queryKey: ["me"],
        queryFn: fetchCurrentUser,
        retry: false,
    });
}
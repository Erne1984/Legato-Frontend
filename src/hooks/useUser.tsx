import { fetchCurrentUser, fetchUserByUsername, fetchUserConnections, getUserConnections, getUserFollowers, getUsers } from "@/services/useService";
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

export function useFetchUserConnections(userId: number) {
    return useQuery({
         queryKey: ['userConnections', userId],
         queryFn: () => fetchUserConnections()
    })
}

export function useGetUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: () => getUsers()
    })
}

export function useGetUsersConnections(id: number) {
    return useQuery({
        queryKey: ["usersConnections", id],
        queryFn: () => getUserConnections()
    })
}

export function useGetUsersFollowers(id: number) {
    return useQuery({
        queryKey: ["usersFollowers", id],
        queryFn: () => getUserFollowers(id)
    })
}
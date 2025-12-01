import { fetchCurrentUser, fetchUserByUsername, fetchUserConnections, getUserConnections, getUserFollowers, getUsers, putUpdateUser, putUploadUserImage } from "@/services/userService";
import { UpdateUserDTO, User } from "@/types/response";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useMe() {
    return useQuery({
        queryKey: ["me"],
        queryFn: fetchCurrentUser,
        retry: true,
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

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ data }: { data: Partial<UpdateUserDTO> }) =>
            putUpdateUser(data),

        onSuccess: (res) => {
            queryClient.setQueryData(["me"], (oldMe: User) => ({
                ...oldMe,
                data: res.data.data
            }));

            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });
}

export function useUploadUserImage() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ type, file }: { type: string; file: File }) =>
            putUploadUserImage(type, file),

        onSuccess: (res) => {
            queryClient.setQueryData(["me"], (old: any) => ({
                ...old,
                data: res.data
            }));

            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });
}
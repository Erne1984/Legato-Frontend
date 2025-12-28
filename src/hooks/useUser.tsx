import { fetchCurrentUser, fetchUserByUsername, getUserConnections, getUserFollowers, getUsers, putUpdateUser, putUploadUserCardImage, putUploadUserImage } from "@/services/userService";
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

// Removido useFetchUserConnections - mesmo que useGetUsersConnections

export function useGetUsers() {
    return useQuery({
        queryKey: ["users"],
        queryFn: getUsers
    });
}

export function useGetUsersConnections() {
    return useQuery({
        queryKey: ["usersConnections"],
        queryFn: getUserConnections
    });
}

export function useGetUsersFollowers(id: number) {
    return useQuery({
        queryKey: ["usersFollowers", id],
        queryFn: () => getUserFollowers(id)
    });
}

export function useUpdateUser() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Partial<UpdateUserDTO>) => putUpdateUser(data),
        onSuccess: (res) => {
            queryClient.setQueryData(["me"], res);
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
            queryClient.setQueryData(["me"], res);
            queryClient.invalidateQueries({ queryKey: ["me"] });
        },
    });
}

export function useUploadUserCardImage() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ index, file }: { index: number; file: File }) =>
            putUploadUserCardImage(index, file),
        onSuccess: (res) => {
            queryClient.setQueryData(["me"], res);
        },
    });
}
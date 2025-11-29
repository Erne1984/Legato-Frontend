import { getNotifications, markAllAsRead, deleteNotification } from "@/services/notificationService";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export function useGetNotifications() {
    return useQuery({
        queryKey: ["notifications"],
        queryFn: () => getNotifications()
    });
}

export function useMarkAllAsRead() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: markAllAsRead,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
        },
    });
}

export function useDeleteNotification() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteNotification,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notifications"] });
        },
    });
}
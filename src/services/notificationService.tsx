import api from "@/libs/axios";
import { ApiResponse, Notification } from "@/types/response";

export async function getNotifications(): Promise<Notification[]> {
  const res = await api.get<ApiResponse<Notification[]>>("/notifications");
  return res.data.data;
}

export async function markAllAsRead() {
  await api.put("/notifications/mark-all-read");
}

export async function deleteNotification(id: number) {
  await api.delete(`/notifications/${id}`);
}
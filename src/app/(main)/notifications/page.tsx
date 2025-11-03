"use client";

import { useState } from "react";
import NotificationsSidebar from "@/components/sections/Notifications/NotificationsSidebar/NotificationsSidebar";
import styles from "./NotificationsPage.module.css";
import NotificationItem, {
  Notification as NotificationItemType,
} from "@/components/ui/NotificationItem/NotificationItem";
import NotificationsMenuMobile from "@/components/sections/Notifications/NotificationsMenuMobile/NotificationsMenuMobile";

type Notification = NotificationItemType;

export default function NotificationPage() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: "follow",
      userName: "@joaomusico",
      userAvatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg/250px-Gaius_Iulius_Caesar_%28Vatican_Museum%29.jpg",
      text: "Novo seguidor: @joaomusico",
      link: "/users/3",
      read: false,
      time: "2 min",
    },
    {
      id: 2,
      type: "comment",
      userName: "@pedrobaixo",
      userAvatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-Augustus.jpg/960px-Statue-Augustus.jpg",
      text: "Comentou no seu post",
      link: "/post/14",
      read: false,
      time: "15 min",
    },
    {
      id: 3,
      type: "connection",
      userAvatar:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Statue-Augustus.jpg/960px-Statue-Augustus.jpg",
      userName: "@joao",
      text: "Enviou pedido de conexão",
      link: "/users/erne",
      read: true,
      time: "1h",
    },
  ]);

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  return (
    <div className={styles.container_wrapper_notifications}>
      <NotificationsSidebar tab="Geral" />

      <NotificationsMenuMobile tab="Geral" />
      <main className={styles.notifications_content}>
        <div className={styles.notifications_header}>
          <h2>Notificações</h2>
          {notifications.some((n) => !n.read) && (
            <button className={styles.mark_all_btn} onClick={markAllAsRead}>
              Marcar todas como lidas
            </button>
          )}
        </div>

        <div className={styles.notifications_list}>
          {notifications.length === 0 ? (
            <p className={styles.empty}>Nenhuma notificação</p>
          ) : (
            notifications.map((n) => (
              <NotificationItem
                key={n.id}
                notification={n}
                onMarkRead={(id) =>
                  setNotifications((prev) =>
                    prev.map((item) =>
                      item.id === id ? { ...item, read: true } : item
                    )
                  )
                }
                onAccept={(id) => console.log("Aceitar", id)}
                onDecline={(id) => console.log("Recusar", id)}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}

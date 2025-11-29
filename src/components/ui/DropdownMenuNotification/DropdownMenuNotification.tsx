"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./DropdownMenuNotification.module.css";
import { useGetNotifications, useMarkAllAsRead } from "@/hooks/useNotification";
import { Notification } from "@/types/response";

function mapNotificationToUI(n: Notification) {
  let link = "/notifications";

  switch (n.targetType) {
    case "USER":
      link = `/users/${n.targetId}`;
      break;
    case "POST":
      link = `/posts/${n.targetId}`;
      break;
    case "CONNECTION_REQUEST":
      link = `/connections/requests/${n.targetId}`;
      break;
  }

  return {
    id: n.id,
    text: n.message,
    link,
    read: n.read,
    time: n.timeAgo,
  };
}

export default function DropdownMenuNotification() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { data: apiNotifications } = useGetNotifications();
  const markAllMutation = useMarkAllAsRead();

  const notifications = apiNotifications?.map(mapNotificationToUI) ?? [];

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllAsRead = () => {
    markAllMutation.mutate();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.dropdown_wrapper} ref={dropdownRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.icon_button}
        aria-label="Abrir notificações"
      >
        <Icon name="bell" size={22} />
        {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
      </button>

      <div className={`${styles.menu} ${open ? styles.open : ""}`}>
        <div className={styles.header}>
          <p>Notificações</p>
          {unreadCount > 0 && (
            <button onClick={handleMarkAllAsRead} className={styles.mark_all}>
              Marcar todas como lidas
            </button>
          )}
        </div>

        <div className={styles.notifications_list}>
          {notifications.length === 0 ? (
            <p className={styles.empty}>Nenhuma notificação</p>
          ) : (
            notifications.map((n) => (
              <Link
                href={n.link}
                key={n.id}
                className={`${styles.notification_item} ${!n.read ? styles.unread : ""}`}
              >
                <div>
                  <p>{n.text}</p>
                  <span className={styles.time}>{n.time}</span>
                </div>
              </Link>
            ))
          )}
        </div>

        <Link href="/notifications" className={styles.view_all}>
          Ver todas
        </Link>
      </div>
    </div>
  );
}

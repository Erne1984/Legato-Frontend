"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./DropdownMenuNotification.module.css";

type Notification = {
  id: number;
  text: string;
  link: string;
  read: boolean;
  time: string;
};

export default function DropdownMenuNotification() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, text: "Novo seguidor: @joaomusico", link: "/users/3", read: false, time: "2 min" },
    { id: 2, text: "Comentaram no seu post", link: "/post/14", read: false, time: "15 min" },
    { id: 3, text: "Nova colaboração enviada", link: "/colaborations", read: true, time: "1h" },
  ]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

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
            <button onClick={markAllAsRead} className={styles.mark_all}>
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
                onClick={() =>
                  setNotifications((prev) =>
                    prev.map((item) =>
                      item.id === n.id ? { ...item, read: true } : item
                    )
                  )
                }
              >
                <div>
                  <p>{n.text}</p>
                  <span className={styles.time}>{n.time}</span>
                </div>
              </Link>
            ))
          )}
        </div>

        <Link href="/notificacoes" className={styles.view_all}>
          Ver todas
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import styles from "./NotificationItem.module.css";
import Image from "next/image";
import Icon from "../Icon/Icon";

export type NotificationType =
  | "follow"
  | "connection"
  | "collaboration"
  | "comment"
  | "plataform";

export type Notification = {
  id: number;
  type: NotificationType;
  text: string;
  link: string;
  read: boolean;
  time: string;
  userAvatar?: string;
  userName?: string;
};

type Props = {
  notification: Notification;
  onMarkRead?: (id: number) => void;
  onAccept?: (id: number) => void;
  onDecline?: (id: number) => void;
};

export default function NotificationItem({
  notification,
  onMarkRead,
  onAccept,
  onDecline,
}: Props) {
  return (
    <div
      className={`${styles.notification_item} ${
        !notification.read ? styles.unread : ""
      }`}
    >
      {notification.userAvatar && (
        <Image
          height={40}
          width={40}
          src={notification.userAvatar}
          alt={"username"}
          className={styles.avatar}
        />
      )}
      <div className={styles.content}>
        <Link
          href={notification.link}
          onClick={() => onMarkRead && onMarkRead(notification.id)}
        >
          <div className={styles.content_username_box}>
            {["follow", "connection", "collaboration", "comment"].includes(
              notification.type
            ) &&
              notification.userName && (
                <p className={styles.username}>{notification.userName}:</p>
              )}
            <p>{notification.text}</p>
          </div>

          <span className={styles.time}>{notification.time}</span>
        </Link>

        {notification.type === "connection" && (
          <div className={styles.actions}>
            <button
              className={styles.accept}
              onClick={() => onAccept && onAccept(notification.id)}
            >
              <Icon name="check" />
            </button>
            <button
              className={styles.decline}
              onClick={() => onDecline && onDecline(notification.id)}
            >
              <Icon name="close" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import styles from "./ChatArea.module.css";
import Icon from "@/components/ui/Icon/Icon";

type ChatHeaderProps = {
  username: string;
  lastSeen: string;
  avatarUrl: string;
  onToggleSidebar?: () => void; 
};

export default function ChatHeader({
  username,
  lastSeen,
  avatarUrl,
  onToggleSidebar,
}: ChatHeaderProps) {
  return (
    <div className={styles.chat_header}>
      <div className={styles.user_info}>
        <button className={styles.menu_button} onClick={onToggleSidebar}>
          <Icon name="list" size={22} />
        </button>

        <Image
          src={avatarUrl}
          alt={username}
          width={40}
          height={40}
          className={styles.avatar}
        />

        <div className={styles.user_text}>
          <h3>{username}</h3>
          <p>{lastSeen}</p>
        </div>
      </div>

      <div className={styles.header_actions}>
        <Icon name="ellipsis" size={20} />
      </div>
    </div>
  );
}
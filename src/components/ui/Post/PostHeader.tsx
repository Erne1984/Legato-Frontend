import Image from "next/image";
import { authorPost } from "@/types/authorPost";
import Icon from "../Icon/Icon";
import styles from "./Post.module.css";

type PostHeaderProps = {
  author: authorPost;
  timestamp: string;
  location?: string;
};

export default function PostHeader({ author, timestamp, location }: PostHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <Image
          src={author.avatarUrl}
          alt={author.name}
          className={styles.avatar}
          width={44}
          height={44}
          priority
        />
        <div className={styles.userInfo}>
          <span className={styles.userName}>{author.name}</span>
          <span className={styles.userMeta}>
            @{author.username} · {timestamp}
          </span>
          {location && <span className={styles.location}>{location}</span>}
        </div>
      </div>
      <Icon name="ellipsis" size={18} className={styles.icon_post_header} />
    </header>
  );
}

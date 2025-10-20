"use client";
import Image from "next/image";
import styles from "./CommentSection.module.css";
import Icon from "../Icon/Icon";
import { useState } from "react";

type CommentProps = {
  id?: number;
  avatarUrl: string;
  username: string;
  timeAgo: string;
  content: string;
  likes: number;
};

export default function Comment({
  avatarUrl,
  username = "Usuário",
  content,
  likes,
  timeAgo = "há 2h",
}: CommentProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  function handleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  return (
    <div className={styles.comment_container}>
      <Image
        src={avatarUrl}
        alt={`${username} avatar`}
        height={40}
        width={40}
        className={styles.comment_avatar}
      />

      <div className={styles.comment_content_wrapper}>
        <div className={styles.comment_header}>
          <span className={styles.comment_username}>{username}</span>
          <span className={styles.comment_time}>{timeAgo}</span>
        </div>
        <p className={styles.comment_text}>{content}</p>

        <div className={styles.comment_actions}>
          <button
            className={`${styles.action_button} ${liked ? styles.liked : ""}`}
            onClick={handleLike}
          >
            <Icon name="heart" size={18} /> <span>{likeCount}</span>
          </button>
          <button className={styles.action_button}>Responder</button>
        </div>
      </div>
    </div>
  );
}

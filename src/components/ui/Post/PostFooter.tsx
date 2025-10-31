"use client";
import { useState } from "react";
import Icon from "../Icon/Icon";
import styles from "./Post.module.css";

type PostFooterProps = {
  likes: number;
  commentsLikes: number;
  postId?: number;  
};

export default function PostFooter({
  likes,
  commentsLikes,
  postId,
}: PostFooterProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [copied, setCopied] = useState(false);

  function handleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  async function handleShare() {
    try {
      const postUrl = postId
        ? `${window.location.origin}/post/${postId}`
        : window.location.href;

      await navigator.clipboard.writeText(postUrl);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar link:", err);
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerButtons}>
        <button
          className={`${styles.footerButton} ${liked ? styles.liked : ""}`}
          onClick={handleLike}
        >
          <Icon name="heart" size={18} /> {likeCount}
        </button>
        <button className={styles.footerButton}>
          <Icon name="message_square" size={18} /> {commentsLikes}
        </button>
      </div>

      <button
        className={`${styles.footerButton} ${copied ? styles.copied : ""}`}
        onClick={handleShare}
        title={copied ? "Link copiado!" : "Compartilhar"}
      >
        <Icon name={copied ? "check" : "share"} size={18} />
      </button>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./AlbumFooter.module.css";

type AlbumFooterProps = {
  likes: number;
  comments: number;
};

export default function AlbumFooter({ likes, comments }: AlbumFooterProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  function handleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
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
          <Icon name="message_square" size={18} /> {comments}
        </button>
      </div>
      <button className={styles.footerButton}>
        <Icon name="share" size={18} />
      </button>
    </footer>
  );
}

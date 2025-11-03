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
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleLike() {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  }

  async function handleCopyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
    setShowShareMenu(false);
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

      <div className={styles.shareWrapper}>
        <button
          className={styles.footerButton}
          onClick={() => setShowShareMenu((prev) => !prev)}
        >
          <Icon name="share" size={18} />
        </button>

        {showShareMenu && (
          <div className={styles.shareMenu}>
            <button onClick={handleCopyLink}>
              <Icon name={copied ? "check" : "link"} size={16} />
              {copied ? "Copiado!" : "Copiar link"}
            </button>
          </div>
        )}
      </div>
    </footer>
  );
}

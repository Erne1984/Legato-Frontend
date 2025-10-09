import Icon from "../Icon/Icon";
import styles from "./Post.module.css";

type PostFooterProps = {
  likes: number;
  comments: number;
};

export default function PostFooter({ likes, comments }: PostFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerButtons}>
        <button className={styles.footerButton}>
          <Icon name="heart" size={18} /> {likes}
        </button>
        <button className={styles.footerButton}>
          <Icon name="message_square" size={18}/> {comments}
        </button>
      </div>
      <button className={styles.footerButton}>
        <Icon name="share" size={18}  />
      </button>
    </footer>
  );
}

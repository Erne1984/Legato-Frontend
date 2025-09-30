import styles from "./StatsCardUser.module.css";

type StatsCardUserProps = {
  connections: number;
  followers: number;
  posts: number;
};

export default function StatsCardUser({
  connections,
  followers,
  posts,
}: StatsCardUserProps) {
  return (
    <div className={styles.container}>
      <div className={styles.stat}>
        <span className={styles.number}>{connections}</span>
        <span className={styles.label}>Conexões</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.number}>{followers}</span>
        <span className={styles.label}>Seguidores</span>
      </div>
      <div className={styles.stat}>
        <span className={styles.number}>{posts}</span>
        <span className={styles.label}>Posts</span>
      </div>
    </div>
  );
}

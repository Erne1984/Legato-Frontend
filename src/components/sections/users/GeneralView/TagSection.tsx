import styles from "./Generalview.module.css";

type TagSectionProps = {
  title: string;
  items: string[];
};

export default function TagSection({ title, items }: TagSectionProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.tags}>
        {items.map((item, i) => (
          <span key={i} className={styles.tag}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

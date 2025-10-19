import styles from "./Generalview.module.css";

export default function ObjectiveSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Objetivo</h3>
      <input
        type="text"
        value="Procurando gente para montar uma banda"
        readOnly
        className={styles.input}
      />
    </section>
  );
}

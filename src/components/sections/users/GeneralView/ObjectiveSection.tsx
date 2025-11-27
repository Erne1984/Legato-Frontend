import styles from "./Generalview.module.css";

type ObjectiveSectionProps = {
  goal: string | null;
}

export default function ObjectiveSection(props: ObjectiveSectionProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Objetivo</h3>
      {
        props.goal ?
          <input
            type="text"
            value={props.goal}
            readOnly
            className={styles.input}
          />
          :
          <input
            type="text"
            value={"Procurando gente para montar uma banda!"}
            readOnly
            className={styles.input}
          />
      }

    </section>
  );
}

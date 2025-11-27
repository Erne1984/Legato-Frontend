import styles from "./Generalview.module.css";

type BioSectionProps = {
  bio: string
}

export default function BioSection(props: BioSectionProps) {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Bio</h3>
      {props.bio ?
        <p className={styles.text}>
          {props.bio}
        </p>
        :
        <p className={styles.text}>
Usuário ainda não possui uma bio
        </p>
      }
    </section>
  );
}

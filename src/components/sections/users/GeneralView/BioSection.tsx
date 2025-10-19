import styles from "./Generalview.module.css";

export default function BioSection() {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Bio</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}

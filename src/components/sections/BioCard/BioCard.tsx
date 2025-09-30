import styles from "./BioCard.module.css";

export default function BioCard() {
  return (
    <div className={styles.card}>
      {/* Bio */}
      <section className={styles.section}>
        <h3 className={styles.title}>Bio</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      {/* Objetivo */}
      <section className={styles.section}>
        <h3 className={styles.title}>Objetivo</h3>
        <input
          type="text"
          value="Procurando gente para montar uma banda"
          readOnly
          className={styles.input}
        />
      </section>

      {/* Habilidades */}
      <section className={styles.section}>
        <h3 className={styles.title}>Habilidades</h3>
        <div className={styles.tags}>
          <span className={styles.tag}>Guitarrista</span>
          <span className={styles.tag}>Vocalista</span>
          <span className={styles.tag}>Compositor</span>
        </div>
      </section>

      {/* Artistas Favoritos */}
      <section className={styles.section}>
        <h3 className={styles.title}>Artistas Favoritos</h3>
        <div className={styles.artists}>
          <img src="https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png" alt="artist" className={styles.artist} />
          <img src="https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png" alt="artist" className={styles.artist} />
          <img src="https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png" alt="artist" className={styles.artist} />
          <img src="https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png" alt="artist" className={styles.artist} />
          <a href="#" className={styles.seeAll}>Ver Tudo</a>
        </div>
      </section>
    </div>
  );
}

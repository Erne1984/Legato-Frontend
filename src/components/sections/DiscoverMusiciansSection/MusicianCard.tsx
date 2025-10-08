import Image from "next/image";
import styles from "./DiscoverMusiciansSection.module.css";

type MusicianCardProps = {
    imgUrl: string
}

export default function MusicianCard(props: MusicianCardProps) {
  return (
    <div className={styles.container_musician_card}>
      <div className={styles.profile_section}>
        <Image
          src={props.imgUrl}
          alt="Foto do músico"
          width={60}
          height={60}
          className={styles.profile_image}
        />
        <div>
          <h3 className={styles.musician_name}>Pedro Martins</h3>
          <p className={styles.musician_username}>@pedroarca</p>
        </div>
      </div>

      <p className={styles.musician_bio}>
        Baterista apaixonado por rock progressivo, sempre em busca de novas
        desafios musicais. Vamos fazer barulho!
      </p>

      <div className={styles.skills_section}>
        <h4>Habilidades</h4>
        <div className={styles.tags}>
          <span className={styles.tag}>Bateria</span>
          <span className={styles.tag}>Coordenação</span>
        </div>
      </div>

      <div className={styles.genres_section}>
        <h4>Gêneros Favoritos</h4>
        <div className={styles.tags}>
          <span className={styles.tag}>Rock</span>
          <span className={styles.tag}>Progressivo</span>
          <span className={styles.tag}>Alternativo</span>
        </div>
      </div>
    </div>
  );
}

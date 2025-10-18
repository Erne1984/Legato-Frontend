import Image from "next/image";
import styles from "./ArtistsModal.module.css";

type Artist = {
  name: string;
  image: string;
};

type ArtistsModalProps = {
  artists: Artist[];
  onClose: () => void;
};

export default function ArtistsModal({ artists, onClose }: ArtistsModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <h2 className={styles.title}>Todos os Artistas Favoritos</h2>
          <button className={styles.closeButton} onClick={onClose}>
            ✕
          </button>
        </header>

        <div className={styles.grid}>
          {artists.map((artist, i) => (
            <div key={i} className={styles.artistCard}>
              <div className={styles.artistWrapper}>
                <Image
                  src={artist.image}
                  alt={artist.name}
                  width={70}
                  height={70}
                  className={styles.artist}
                />
              </div>
              <span className={styles.artistName}>{artist.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

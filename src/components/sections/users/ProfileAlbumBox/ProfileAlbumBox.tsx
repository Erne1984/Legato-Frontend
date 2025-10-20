import Image from "next/image";
import styles from "./ProfileAlbumBox.module.css";
import Link from "next/link";

type ProfileAlbumBoxProps = {
  showSeeAll: boolean;
};

export default function ProfileAlbumBox({ showSeeAll }: ProfileAlbumBoxProps) {
  const albums = [
    {
      title: "Reflexões sobre notas de inverno",
      artist: "Chicão das Massas",
      date: "11 de jan. de 2025",
      tracks: 14,
      likes: 197,
      comments: 47,
      cover:
        "https://chicobuarque.com.br/arquivos/Disco/47a5fee4-75f7-4f59-b85d-88fce573048a_medium.jpg",
    },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Link href="#" className={styles.title}>
          Álbuns
        </Link>

        {showSeeAll && (
          <Link href="/users/erne/albums" className={styles.viewAll}>
            Visualizar tudo
          </Link>
        )}
      </div>

      {albums.map((album, index) => (
        <div key={index} className={styles.album}>
          <Image
            src={album.cover}
            alt={album.title}
            className={styles.cover}
            width={40}
            height={40}
          />

          <div className={styles.info}>
            <Link href="/users/erne/albums/erne" className={styles.albumTitle}>
              {album.title}
            </Link>
            <p className={styles.details}>
              Álbum por {album.artist} · {album.date}
            </p>
            <p className={styles.meta}>
              {album.tracks} faixas · {album.likes} curtidas · {album.comments}{" "}
              comentários
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

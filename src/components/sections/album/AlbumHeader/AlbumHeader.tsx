"use client";

import Image from "next/image";
import styles from "./AlbumHeader.module.css";
import AlbumFooter from "../AlbumFooter/AlbumFooter";

const album = {
  title: "Notas de Inverno Sobre Impressões de Verão",
  artist: "DamnYouFendi",
  description: "Checking all the street shit",
  releaseDate: "29 de set.",
  genre: "Hip Hop",
  cover:
    "https://chicobuarque.com.br/arquivos/Disco/47a5fee4-75f7-4f59-b85d-88fce573048a_medium.jpg",
};

export default function AlbumHeader() {
  return (
    <div className={styles.album_wrapper}>
      <div className={styles.albumHeader}>
        <Image
          src={album.cover}
          alt={album.title}
          width={180}
          height={180}
          className={styles.albumCover}
        />
        <div className={styles.albumInfo}>
          <h1 className={styles.albumTitle}>{album.title}</h1>
          <p className={styles.artist}>{album.artist}</p>
          <p className={styles.description}>{album.description}</p>
          <p className={styles.meta}>
            Lançado {album.releaseDate} · Álbum · {album.genre}
          </p>
        </div>
      </div>

      <AlbumFooter comments={5} likes={2} />
    </div>
  );
}

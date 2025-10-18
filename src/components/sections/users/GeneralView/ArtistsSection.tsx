"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Generalview.module.css";
import ArtistsModal from "@/components/ui/ArtistsModal/ArtistsModal";

export default function ArtistsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const artists = [
    {
      name: "Mac DeMarco",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png",
    },
    {
      name: "Tame Impala",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png",
    },
    {
      name: "Arctic Monkeys",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png",
    },
    {
      name: "Gorillaz",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png",
    },
    {
      name: "Radiohead",
      image:
        "https://upload.wikimedia.org/wikipedia/en/1/15/Macdemarco2cover.png",
    },
  ];

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>Artistas Favoritos</h3>
      <div className={styles.artists}>
        {artists.slice(0, 4).map((artist, i) => (
          <div key={i} className={styles.artistWrapper}>
            <Image
              src={artist.image}
              alt={artist.name}
              width={45}
              height={45}
              className={styles.artist}
            />
          </div>
        ))}
        <span className={styles.seeAll} onClick={() => setIsModalOpen(true)}>
          Ver Tudo
        </span>
      </div>

      {isModalOpen && (
        <ArtistsModal artists={artists} onClose={() => setIsModalOpen(false)} />
      )}
    </section>
  );
}

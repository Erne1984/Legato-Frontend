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
        "https://upload.wikimedia.org/wikipedia/pt/2/2d/Currents_Tame_Impala.png",
    },
    {
      name: "Vacations",
      image: "https://i.scdn.co/image/ab6761610000e5eb080c868c83bba9ba37f13639",
    },
    {
      name: "Fall of Troy",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e9/8f/2f/e98f2f80-f0bf-228b-d5e2-67939a0c9df7/artwork.jpg/1200x630bb.jpg",
    },
    {
      name: "Radiohead",
      image:
        "https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2021/09/3b1d2f8-radiohead-1024x683.jpg",
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

"use client";

import { Track } from "@/types/Track";
import styles from "./album.module.css";
import AlbumContent from "@/components/sections/album/AlbumContent/AlbumContent";

export default function AlbumPage() {
  const tracks: Track[] = [
    {
      title: "MORE THAN YOU EVER PROD. 99LA",
      artist: "Erne1917",
      duration: "2:30",
      cover: "",
      explicit: true,
      audio: "/audio/1.mp3",
    },
  ];

  return (
    <div className={styles.albumPage}>
       <AlbumContent tracks={tracks}/>
    </div>
  );
}

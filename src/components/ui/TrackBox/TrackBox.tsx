import Image from "next/image";
import styles from "./TrackBox.module.css";
import { Track } from "@/types/Track";

interface TrackBoxProps {
  onSelectTrack: (track: Track) => void;
}

export default function TrackBox({ onSelectTrack }: TrackBoxProps) {
const tracks = [
  {
    title: "I do it (4 Flows)",
    artist: "Bvnita",
    duration: "3:07",
    cover: "https://preview.redd.it/e-se-quando-pesquisarem-steve-huffman-aparecesse-o-v0-u9tw7pgbe27b1.jpg?width=320&crop=smart&auto=webp&s=2413a97ecdbdd9e989f9e78fe85adbea8022ac3f",
    explicit: true,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "RID3 4 ME",
    artist: "Bvnita",
    duration: "6:12",
    cover: "https://preview.redd.it/e-se-quando-pesquisarem-steve-huffman-aparecesse-o-v0-u9tw7pgbe27b1.jpg?width=320&crop=smart&auto=webp&s=2413a97ecdbdd9e989f9e78fe85adbea8022ac3f",
    explicit: true,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    title: "Purple fanta",
    artist: "Bvnita",
    duration: "1:39",
    cover: "https://preview.redd.it/e-se-quando-pesquisarem-steve-huffman-aparecesse-o-v0-u9tw7pgbe27b1.jpg?width=320&crop=smart&auto=webp&s=2413a97ecdbdd9e989f9e78fe85adbea8022ac3f",
    explicit: true,
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
];

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>Faixas</h3>
        <a href="#" className={styles.viewAll}>Visualizar tudo</a>
      </div>

      <ul className={styles.list}>
        {tracks.map((track, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => onSelectTrack(track)}
          >
            <Image
              src={track.cover}
              alt={track.title}
              className={styles.cover}
              width={40}
              height={40}
            />
            <div className={styles.info}>
              <h4 className={styles.trackTitle}>
                {track.title}
                {track.explicit && <span className={styles.explicit}>E</span>}
              </h4>
              <p className={styles.artist}>{track.artist}</p>
            </div>
            <span className={styles.duration}>{track.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

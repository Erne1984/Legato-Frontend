import TrackBox from "@/components/ui/TrackBox/TrackBox";
import AlbumHeader from "../AlbumHeader/AlbumHeader";
import styles from "./AlbumContent.module.css";
import MusicPlayer from "@/components/ui/MusicPlayer/MusicPlayer";
import { Track } from "@/types/Track";
import { useState } from "react";

type AlbumContentProps = {
  tracks: Track[];
};

export default function AlbumContent({ tracks }: AlbumContentProps) {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);

  const handleSelectTrack = (track: Track) => {
    setCurrentTrack(track);
    setPlayerVisible(true);
  };

  return (
    <div className={styles.albumPage}>
      <div className={styles.main_content_album}>
        <AlbumHeader />

        <ul className={styles.trackList}>
          {tracks.map((track, index) => (
            <TrackBox showSeeAll={false} onSelectTrack={handleSelectTrack} key={index} />
          ))}
        </ul>

        <MusicPlayer
          currentTrack={currentTrack}
          visible={playerVisible}
          onClose={() => setPlayerVisible(false)}
        />
      </div>
    </div>
  );
}

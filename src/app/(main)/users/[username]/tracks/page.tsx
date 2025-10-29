"use client";
import styles from "./tracks.module.css";
import { useState } from "react";
import { Track } from "@/types/Track";
import TrackBox from "@/components/ui/TrackBox/TrackBox";
import MusicPlayer from "@/components/ui/MusicPlayer/MusicPlayer";

export default function AlbumsPage() {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [playerVisible, setPlayerVisible] = useState(false);

  const handleSelectTrack = (track: Track) => {
    setCurrentTrack(track);
    setPlayerVisible(true);
  };

  return (
    <div className={styles.tracks_page}>
      <div className={styles.tracks_page_wrapper}>
        <TrackBox showSeeAll={false} onSelectTrack={handleSelectTrack} />
      </div>

      <MusicPlayer
        currentTrack={currentTrack}
        visible={playerVisible}
        onClose={() => setPlayerVisible(false)}
      />
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./MusicPlayer.module.css";
import { Track } from "@/types/Track";
import Icon from "@/components/ui/Icon/Icon"; 

interface MusicPlayerProps {
  currentTrack: Track | null;
  visible: boolean;
  onClose: () => void;
}

export default function MusicPlayer({
  currentTrack,
  visible,
  onClose,
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const skipForward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.min(
      audioRef.current.currentTime + 10,
      duration
    );
  };

  const skipBackward = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = Math.max(
      audioRef.current.currentTime - 10,
      0
    );
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoaded = () => {
      if (!isNaN(audio.duration)) setDuration(audio.duration);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoaded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoaded);
    };
  }, [audioRef.current]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !currentTrack) return;

    audio.src = currentTrack.audio;
    audio.play();
    setIsPlaying(true);
  }, [currentTrack]);

  if (!visible || !currentTrack) return null;

  return (
    <div className={styles.player}>
      <audio ref={audioRef} src={currentTrack.audio} />

      <div className={styles.info}>
        <Image
          src={currentTrack.cover}
          alt={currentTrack.title}
          width={50}
          height={50}
          className={styles.cover}
        />
        <div>
          <p className={styles.title}>{currentTrack.title}</p>
          <p className={styles.artist}>{currentTrack.artist}</p>
        </div>
      </div>

      <div className={styles.centerControls}>
        <div className={styles.buttons}>
          <button onClick={skipBackward}>
            <Icon name="stepBack" size={20} className={styles.icon} />
          </button>
          <button onClick={togglePlay} className={styles.playButton}>
            {isPlaying ? (
              <Icon name="circlePause" size={22} />
            ) : (
              <Icon name="play" size={22} />
            )}
          </button>
          <button onClick={skipForward}>
            <Icon name="stepForward" size={20} className={styles.icon} />
          </button>
        </div>

        <div className={styles.progress}>
          <span className={styles.time}>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={duration}
            step={0.0}
            value={currentTime}
            onChange={handleSeek}
            className={styles.slider}
          />
          <span className={styles.time}>{formatTime(duration)}</span>
        </div>
      </div>

      <div className={styles.rightControls}>
        <button
          className={`${styles.iconButton} ${isLiked ? styles.liked : ""}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Icon name="heart" size={18} />
        </button>
        <button className={styles.iconButton}>
          <Icon name="share" size={18} />
        </button>
        <button
          className={styles.iconButton}
          onClick={() => {
            if (audioRef.current) audioRef.current.pause();
            onClose();
          }}
        >
          <Icon name="close" size={18} />
        </button>
      </div>
    </div>
  );
}

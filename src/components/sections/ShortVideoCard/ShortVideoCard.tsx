"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./ShortVideoCard.module.css";
import Image from "next/image";

type ShortVideoCardProps = {
  videoUrl: string;
};

export default function ShortVideoCard({ videoUrl }: ShortVideoCardProps) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.muted = true;
    video.currentTime = 1;

    video.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setThumbnail(canvas.toDataURL("image/jpeg"));
      }
    });
  }, [videoUrl]);

  return (
    <>
      <div
        className={styles.thumbnailContainer}
        onClick={() => setIsModalOpen(true)}
      >
        {thumbnail ? (
          <Image
            layout="fill" 
            objectFit="cover"
            src={thumbnail}
            alt="Video thumbnail"
            className={styles.thumbnail}
          />
        ) : (
          <div className={styles.loadingThumbnail}>Carregando...</div>
        )}
      </div>

      {isModalOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              autoPlay
              className={styles.videoPlayer}
            />
          </div>
        </div>
      )}
    </>
  );
}

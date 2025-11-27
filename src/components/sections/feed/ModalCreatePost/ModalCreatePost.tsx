"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ModalCreatePost.module.css";
import Icon from "@/components/ui/Icon/Icon";

type ModalCreatePostProps = {
  imgUrl?: string | null;
  username: string;
  onClose: () => void;
};

export default function ModalCreatePost({
  imgUrl,
  username,
  onClose,
}: ModalCreatePostProps) {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [audioPreview, setAudioPreview] = useState<string | null>(null);
  const maxChars = 255;

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fileURL = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      setImagePreview(fileURL);
      setVideoPreview(null);
      setAudioPreview(null);
    } else if (file.type.startsWith("video/")) {
      setVideoPreview(fileURL);
      setImagePreview(null);
      setAudioPreview(null);
    } else if (file.type.startsWith("audio/")) {
      setAudioPreview(fileURL);
      setImagePreview(null);
      setVideoPreview(null);
    }
  };

  const handleOpenFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            {imgUrl ? (
              <Image
                src={imgUrl}
                alt={username}
                width={40}
                height={40}
                className={styles.avatar}
              />
            ) : (
              <div className={styles.placeholderAvatar}>
                <Icon name="camera" size={20} />
              </div>
            )}
            <div className={styles.userText}>
              <span className={styles.displayName}>{username}</span>
              <span className={styles.username}>@{username.toLowerCase()}</span>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>

        {/* Texto */}
        <textarea
          className={styles.textarea}
          placeholder="O que há de novo?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxChars}
        />

        {imagePreview && (
          <div className={styles.imagePreviewContainer}>
            <Image
              src={imagePreview}
              alt="Pré-visualização da imagem"
              width={800}
              height={450}
              className={styles.imagePreview}
            />
          </div>
        )}

        {videoPreview && (
          <div className={styles.videoPreviewContainer}>
            <video controls className={styles.videoPreview}>
              <source src={videoPreview} type="video/mp4" />
            </video>
          </div>
        )}

        {audioPreview && (
          <div className={styles.audioPreviewContainer}>
            <audio controls className={styles.audioPreview}>
              <source src={audioPreview} type="audio/mpeg" />
            </audio>
          </div>
        )}

        {/* Footer */}
        <div className={styles.footer}>
          <div className={styles.left}>
            <button
              className={styles.iconButton}
              onClick={handleOpenFileDialog}
            >
              <Icon name="image" />
            </button>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*,video/*,audio/*"
              style={{ display: "none" }}
            />

            <span className={styles.charCount}>
              {text.length}/{maxChars}
            </span>
          </div>

          <button className={styles.publishButton}>Publicar</button>
        </div>
      </div>
    </div>
  );
}

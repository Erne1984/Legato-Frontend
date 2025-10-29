"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./ModalCreateColaboration.module.css";
import Icon from "@/components/ui/Icon/Icon";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

type ModalCreateColaborationProps = {
  imgUrl: string;
  username: string;
  onClose: () => void;
};

export default function ModalCreateColaboration({
  imgUrl,
  username,
  onClose,
}: ModalCreateColaborationProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [genres, setGenres] = useState("");
  const [royalties, setRoyalties] = useState("");
  const [deadline, setDeadline] = useState("");
  const [remote, setRemote] = useState(true);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [audioPreview, setAudioPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Upload genérico
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

  const handleSubmit = () => {
    const newColab = {
      title,
      description,
      genres,
      royalties,
      deadline,
      remote,
      media: imagePreview || videoPreview || audioPreview,
    };
    console.log("Nova colaboração:", newColab);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <Image
              src={imgUrl}
              alt={username}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <div className={styles.userText}>
              <span className={styles.displayName}>{username}</span>
              <span className={styles.username}>@{username.toLowerCase()}</span>
            </div>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <Icon name="close" />
          </button>
        </div>

        {/* Formulário */}
        <div className={styles.form}>
          <input
            type="text"
            placeholder="Título da colaboração (ex: Looking for a drummer)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />

          <textarea
            className={styles.textarea}
            placeholder="Descreva o projeto ou a ideia..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className={styles.inlineGroup}>
            <input
              type="text"
              placeholder="Gêneros (ex: Rock, R&B)"
              value={genres}
              onChange={(e) => setGenres(e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Royalties (ex: % de publishing)"
              value={royalties}
              onChange={(e) => setRoyalties(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inlineGroup}>
            <input
              type="text"
              placeholder="Prazo (ex: dentro de 25 dias)"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className={styles.input}
            />

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={remote}
                onChange={(e) => setRemote(e.target.checked)}
              />
              Remoto
            </label>
          </div>

          {/* Uploads */}
          {(imagePreview || videoPreview || audioPreview) && (
            <div className={styles.previewContainer}>
              {imagePreview && (
                <Image
                  src={imagePreview}
                  alt="Preview"
                  width={800}
                  height={450}
                  className={styles.previewMedia}
                />
              )}
              {videoPreview && (
                <video controls className={styles.previewMedia}>
                  <source src={videoPreview} type="video/mp4" />
                </video>
              )}
              {audioPreview && (
                <audio controls className={styles.previewAudio}>
                  <source src={audioPreview} type="audio/mpeg" />
                </audio>
              )}
            </div>
          )}

          <div className={styles.footer}>
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

            <PrimaryButton
              content="Publicar Colaboração"
              onClick={handleSubmit}
            ></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import styles from "./MatchModal.module.css";

type MatchModalProps = {
  show: boolean;
  onClose: () => void;
  user: {
    name: string;
    image_profile: { type: string; src: string };
  };
};

export default function MatchModal({ show, onClose, user }: MatchModalProps) {
  const [message, setMessage] = useState("");

  if (!show) return null;

  const handleSend = () => {
    console.log("Enviar pedido de conexão:", message);
    onClose();
  };

  const handleCancel = () => {
    console.log("Cancelar envio de conexão");
    onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.header}>
          <img
            src={user.image_profile.src}
            alt={user.name}
            className={styles.profile_img}
          />
        </div>

        <h2 className={styles.title}>
          Enviar conexão para <span>{user.name}</span>
        </h2>

        <textarea
          className={styles.textarea}
          maxLength={255}
          placeholder="Enviar com Nota (Opcional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button className={styles.send_button} onClick={handleSend}>
          Enviar pedido de conexão
        </button>

        <button className={styles.cancel_button} onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

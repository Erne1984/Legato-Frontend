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
    onCancel?: () => void; // nova prop
    onSend?: () => void
};

export default function MatchModal({ show, onClose, user, onCancel, onSend }: MatchModalProps) {
  const [message, setMessage] = useState("");

  if (!show) return null;

  const handleSend = () => {
    console.log("Enviar pedido de conexão:", message);
      if (onSend) onSend();

    onClose();
  };

const handleCancel = () => {
  console.log("Cancelar envio de conexão");
  if (onCancel) onCancel(); // chama função do pai
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

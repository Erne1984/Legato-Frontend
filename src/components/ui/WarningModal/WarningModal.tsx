"use client";
import React from "react";
import styles from "./WarningModal.module.css";

type WarningModalProps = {
  show: boolean;
  message: string;
  onClose?: () => void; // agora opcional
  showCloseButton?: boolean; // opcional, define se o botão aparece
};

export default function WarningModal({
  show,
  message,
  onClose,
  showCloseButton = true, // padrão: true
}: WarningModalProps) {

  if (!show) return null;

  const handleClose = () => {
    console.log("Fechar modal de aviso");
    if (onClose) onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <h2 className={styles.title}>
          {message}
        </h2>

        {showCloseButton && onClose && (
          <button className={styles.send_button} onClick={handleClose}>
            Fechar
          </button>
        )}
      </div>
    </div>
  );
}

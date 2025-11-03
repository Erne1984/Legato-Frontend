"use client";
import React, { useState } from "react";
import styles from "./UserActionModal.module.css";
import Image from "next/image";

type ReportUserModalProps = {
  show: boolean;
  onClose: () => void;
  onSend: (reason: string) => void;
  user: {
    name: string;
    image_profile: string;
  };
};

export default function ReportUserModal({
  show,
  onClose,
  onSend,
  user,
}: ReportUserModalProps) {
  const [reason, setReason] = useState("");

  if (!show) return null;

  const handleSend = () => {
    if (!reason.trim()) return;
    onSend(reason);
    onClose();
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <Image
          width={90}
          height={90}
          src={user.image_profile}
          alt={user.name}
          className={styles.profile_img}
        />
        <h2 className={styles.title}>
          Reportar <span>{user.name}</span>
        </h2>
        <textarea
          className={styles.textarea}
          maxLength={255}
          placeholder="Descreva o motivo do reporte..."
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <button className={styles.send_button} onClick={handleSend}>
          Enviar denúncia
        </button>
        <button className={styles.cancel_button} onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

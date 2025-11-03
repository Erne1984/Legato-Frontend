"use client";
import React from "react";
import styles from "./UserActionModal.module.css";
import Image from "next/image";

type BlockUserModalProps = {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
  user: {
    name: string;
    image_profile: string;
  };
};

export default function BlockUserModal({
  show,
  onClose,
  onConfirm,
  user,
}: BlockUserModalProps) {
  if (!show) return null;

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
          Bloquear <span>{user.name}</span>?
        </h2>
        <p className={styles.text}>
          Você não poderá mais interagir nem ver o conteúdo dessa pessoa. Essa
          ação pode ser desfeita depois.
        </p>

        <button className={styles.danger_button} onClick={onConfirm}>
          Bloquear usuário
        </button>
        <button className={styles.cancel_button} onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

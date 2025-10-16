"use client";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import styles from "./ProfileBannerUploader.module.css";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";

type ImageModalProps = {
  title: string;
  onClose: () => void;
  onSave?: () => void;
};

export default function ImageModal({
  title,
  onClose,
  onSave,
}: ImageModalProps) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>{title}</h3>
        <input type="file" accept="image/*" />
        <div className={styles.modalActions}>
          <SecondaryButton content="Cancelar" onClick={onClose} />
          <PrimaryButton content="Salvar" onClick={onSave} size="small" />
        </div>
      </div>
    </div>
  );
}

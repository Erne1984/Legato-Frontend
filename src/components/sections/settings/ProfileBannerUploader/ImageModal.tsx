"use client";
import { useState } from "react";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton/SecondaryButton";
import { useUploadUserImage } from "@/hooks/useUser";
import styles from "./ProfileBannerUploader.module.css";

type ImageModalProps = {
  title: string;
  type: "profile" | "banner";
  onClose: () => void;
};

export default function ImageModal({ title, type, onClose }: ImageModalProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { mutate: upload, isPending } = useUploadUserImage();

  function handleSave() {
    if (!selectedFile) return;

    upload(
      { type, file: selectedFile },
      { onSuccess: onClose }
    );
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>{title}</h3>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
        />

        <div className={styles.modalActions}>
          <SecondaryButton content="Cancelar" onClick={onClose} />
          <PrimaryButton
            content={isPending ? "Salvando..." : "Salvar"}
            onClick={handleSave}
            size="small"
            disabled={isPending || !selectedFile}
          />
        </div>
      </div>
    </div>
  );
}

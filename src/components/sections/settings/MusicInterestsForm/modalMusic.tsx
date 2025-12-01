"use client";

import styles from "./MusicInterestsForm.module.css";
import { Instrument, InstrumentLabel, InstrumentValues } from "@/types/skills";
import { Genre, GenreLabel, GenreValues } from "@/types/genres";

type ModalType = "instrument" | "genre";

interface ModalMusicProps {
  type: ModalType;
  selected: string[];
  onToggle: (value: string) => void;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ModalMusic({
  type,
  selected,
  onToggle,
  onCancel,
  onConfirm,
}: ModalMusicProps) {
  const values = type === "instrument" ? InstrumentValues : GenreValues;
  const title = type === "instrument" ? "Selecione Instrumentos" : "Selecione Gêneros";

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <h3 className={styles.modalTitle}>{title}</h3>

        <div className={styles.modalList}>
          {values.map((value) => {
            const label = type === "instrument" 
              ? InstrumentLabel[value as Instrument]
              : GenreLabel[value as Genre];
            
            return (
              <label key={value} className={styles.modalItem}>
                <input
                  type="checkbox"
                  checked={selected.includes(value)}
                  onChange={() => onToggle(value)}
                  className={styles.checkbox}
                />
                <span>{label}</span>
                {selected.includes(value) && (
                  <span className={styles.checkmark}>✓</span>
                )}
              </label>
            );
          })}
        </div>

        <div className={styles.modalFooter}>
          <button 
            className={styles.modalCancel} 
            onClick={onCancel}
            aria-label="Cancelar seleção"
          >
            Cancelar
          </button>
          <button 
            className={styles.modalConfirm} 
            onClick={onConfirm}
            aria-label="Confirmar seleção"
          >
            Confirmar ({selected.length})
          </button>
        </div>
      </div>
    </div>
  );
}
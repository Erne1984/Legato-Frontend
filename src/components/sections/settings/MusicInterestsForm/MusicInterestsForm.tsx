"use client";

import { useState } from "react";
import styles from "./MusicInterestsForm.module.css";
import { Instrument, InstrumentLabel, InstrumentValues } from "@/types/skills";
import { Genre, GenreLabel, GenreValues } from "@/types/genres";
import ModalMusic from "./modalMusic";

interface Props {
  initialInstruments: Instrument[];
  initialGenres: Genre[];
  onChange: (data: { instruments: Instrument[], genres: Genre[] }) => void;
}


type ModalType = "instrument" | "genre";

export default function MusicInterestsForm({
  initialInstruments,
  initialGenres,
  onChange
}: Props) {
  const [instruments, setInstruments] = useState<Instrument[]>(initialInstruments);
  const [genres, setGenres] = useState<Genre[]>(initialGenres);

  const [modalType, setModalType] = useState<ModalType | null>(null);
  const [tempSelection, setTempSelection] = useState<string[]>([]);

  const openModal = (type: ModalType) => {
    setModalType(type);
    setTempSelection(type === "instrument" ? instruments : genres);
  };

  const toggleSelection = (value: string) => {
    setTempSelection((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

const confirmModal = () => {
  let newData;
  
  if (modalType === "instrument") {
    const updated = tempSelection as Instrument[];
    setInstruments(updated);
    newData = { instruments: updated, genres };
  } else {
    const updated = tempSelection as Genre[];
    setGenres(updated);
    newData = { instruments, genres: updated };
  }

  onChange(newData);
  setModalType(null);
};

  const renderTags = (items: string[]) =>
    items.map((item) => (
      <span key={item} className={styles.tag}>
        {item}
      </span>
    ));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Interesses Musicais</h2>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Habilidades</h3>
        <div className={styles.tagList}>
          {renderTags(instruments.map((i) => InstrumentLabel[i]))}
          <button className={styles.addButton} onClick={() => openModal("instrument")}>
            + Adicionar
          </button>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Gêneros Favoritos</h3>
        <div className={styles.tagList}>
          {renderTags(genres.map((g) => GenreLabel[g]))}
          <button className={styles.addButton} onClick={() => openModal("genre")}>
            + Adicionar
          </button>
        </div>
      </div>

      {modalType && (
        <ModalMusic
          type={modalType}
          selected={tempSelection}
          onToggle={toggleSelection}
          onCancel={() => setModalType(null)}
          onConfirm={confirmModal}
        />
      )}
    </div>
  );
}

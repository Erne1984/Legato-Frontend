"use client";

import React, { useState } from "react";
import styles from "./FilterMusiciansModal.module.css";
import { CardType } from "@/types/cards";

type Props = {
  onClose: () => void;
  onUndo: (card: CardType) => void;
  onApplyFilters: (filters: {
    skills: string[];
    gender: string;
    ageMin: number;
    ageMax: number;
    musicGenres: string[];
    distanceMin: number;
    distanceMax: number;
  }) => void;
   onResetFilters: () => void; // nova prop
};


const allSkills = ["Vocalista", "Guitarrista", "Baterista", "Produtor", "Compositor"];
const allGenres = ["Rock", "Jazz", "Pop", "MPB", "Eletrônica", "Reggae"];
const options = ["Todos", "Masculino", "Feminino", "Outro"];


export default function FilterMusiciansModal({ onClose, onUndo, onApplyFilters, onResetFilters }: Props) {
  const [skills, setSkills] = useState<string[]>(allSkills); // ← inicializa todas selecionadas
  const [musicGenres, setMusicGenres] = useState<string[]>(allGenres);
  const [gender, setGender] = useState("Todos");
  const [open, setOpen] = useState(false);
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 99]);
  const [distance, setDistance] = useState<[number, number]>([0, 100]);

  const handleSkillChange = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

const handleApply = () => {
    onApplyFilters({
      skills,
      gender,
      ageMin: ageRange[0],
      ageMax: ageRange[1],
      musicGenres,
      distanceMin: distance[0],
      distanceMax: distance[1],
    });
  };

  const handleReset = () => {
    // reset dos estados internos
    setSkills(allSkills);
    setMusicGenres(allGenres);
    setGender("Todos");
    setAgeRange([18, 99]);
    setDistance([0, 100]);

    // chama a função de reset externa
    onResetFilters();
  };
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.dropdown}>
        <div className={styles.header}>
          <h2>Filtrar Músicos</h2>
          <button
            className={styles.close_button}
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        <div className={styles.filterSection}>
          <h4>Skills</h4>
          <div className={styles.options}>
            {allSkills.map((skill) => {
              const selected = skills.includes(skill);
              return (
                <button
                  key={skill}
                  type="button"
                  className={`${styles.optionButton} ${selected ? styles.selected : ""}`}
                  onClick={() => handleSkillChange(skill)}
                >
                  {skill} {selected && <span className={styles.closeX}>✕</span>}
                </button>
              );
            })}

          </div>
        </div>


{/* Gender */}
<div className={styles.filterSection}>
  <h4>Gênero</h4>
  <div
    className={styles.customSelect}
    onClick={() => setOpen((prev) => !prev)}
  >
    <div className={styles.selectedOption}>
      <span>{gender}</span>
      <span
        className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}
      >
        ▼
      </span>
    </div>

    {open && (
      <div
        className={styles.dropdownOptions}
        onClick={(e) => e.stopPropagation()} // 🔹 impede que o clique feche/reabra o menu
      >
        {options.map((opt) => (
          <div
            key={opt}
            className={`${styles.optionItem} ${
              gender === opt ? styles.selected : ""
            }`}
            onClick={(e) => {
              e.stopPropagation(); // 🔹 também aqui, por segurança
              setGender(opt);
              setOpen(false);
            }}
          >
            {opt}
          </div>
        ))}
      </div>
    )}
  </div>
</div>


        {/* Age Range */}
        <div className={styles.filterSection}>
          <h4>Idade</h4>
          <div className={styles.doubleSlider}>
            <input
              type="range"
              min={18}
              max={99}
              value={ageRange[0]}
              onChange={(e) =>
                setAgeRange([Math.min(+e.target.value, ageRange[1]), ageRange[1]])
              }
            />
            <input
              type="range"
              min={18}
              max={99}
              value={ageRange[1]}
              onChange={(e) =>
                setAgeRange([ageRange[0], Math.max(+e.target.value, ageRange[0])])
              }
            />
            <div className={styles.rangeTrack}>
              <div
                className={styles.rangeFill}
                style={{
                  left: `${((ageRange[0] - 18) / (99 - 18)) * 100}%`,
                  right: `${100 - ((ageRange[1] - 18) / (99 - 18)) * 100}%`,
                }}
              />
            </div>
            <p>{ageRange[0]} – {ageRange[1]} anos</p>
          </div>
        </div>

        {/* Music Genre */}
        <div className={styles.filterSection}>
          <h4>Gênero Musical</h4>
          <div className={styles.options}>
            {allGenres.map((genre) => {
              const selected = musicGenres.includes(genre); // vamos mudar musicGenre para string[]
              return (
                <button
                  key={genre}
                  type="button"
                  className={`${styles.optionButton} ${selected ? styles.selected : ""}`}
                  onClick={() => {
                    if (selected) {
                      setMusicGenres((prev: string[]) =>
                        prev.filter((g) => g !== genre)
                      );
                    } else {
                      setMusicGenres((prev: string[]) => [...prev, genre]);
                    }
                  }}
                >
                  {genre} {selected && <span className={styles.closeX}>✕</span>}
                </button>
              );
            })}
          </div>
        </div>


        {/* Distance */}
        <div className={styles.filterSection}>
          <h4>Distância (km)</h4>
          <div className={styles.doubleSlider}>
            <input
              type="range"
              min={0}
              max={100}
              value={distance[0]}
              onChange={(e) =>
                setDistance([Math.min(+e.target.value, distance[1]), distance[1]])
              }
            />
            <input
              type="range"
              min={0}
              max={100}
              value={distance[1]}
              onChange={(e) =>
                setDistance([distance[0], Math.max(+e.target.value, distance[0])])
              }
            />
            <div className={styles.rangeTrack}>
              <div
                className={styles.rangeFill}
                style={{
                  left: `${(distance[0] / 100) * 100}%`,
                  right: `${100 - (distance[1] / 100) * 100}%`,
                }}
              />
            </div>
            <p>{distance[0]} km – {distance[1]} km</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.cancel} onClick={handleReset}>
            Resetar Filtros
          </button>
          <button className={styles.apply} onClick={handleApply}>
            Aplicar Filtros
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import React, { useState } from "react";
import FilterMusiciansModal from "../FilterMusiciansModal/FilterMusiciansModal";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./FilterMusciansButton.module.css";
import { CardType } from "@/types/cards";

export type FiltersType = {
  skills: string[];
  gender: string;
  ageMin: number;
  ageMax: number;
  musicGenres: string[];
  distanceMin: number;
  distanceMax: number;
};

type FilterMusiciansButtonProps = {
  onUndo: (card: CardType) => void;
  onApplyFilters: (filters: FiltersType) => void;
  onResetFilters: () => void;
};

export default function FilterMusiciansButton({
  onUndo,
  onApplyFilters,
  onResetFilters,
}: FilterMusiciansButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={styles.filterButton}
        onClick={() => setOpen(true)}
        aria-label="Abrir lista de filtragem"
      >
        <Icon name="filter" className={styles.filter_icon} />
        {open ? "Fechar Filtros" : "Filtrar"}
      </button>

      {open && (
        <FilterMusiciansModal
          onClose={() => setOpen(false)}
          onUndo={onUndo}
          onApplyFilters={(filters: FiltersType) => {
            onApplyFilters(filters);
            setOpen(false);
          }}
          onResetFilters={() => {
            onResetFilters();
            setOpen(false);
          }}
        />
      )}
    </>
  );
}

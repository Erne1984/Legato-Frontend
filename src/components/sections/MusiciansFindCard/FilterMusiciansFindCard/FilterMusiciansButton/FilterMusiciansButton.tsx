"use client";

import React, { useState } from "react";
import FilterMusiciansModal from "../FilterMusiciansModal/FilterMusiciansModal";
import Icon from "@/components/ui/Icon/Icon";
import styles from "./FilterMusciansButton.module.css";
import { CardType } from "@/types/cards";

type FilterMusiciansButtonProps = {
  onUndo: (card: CardType) => void;
  onApplyFilters: (filters: any) => void;
  onResetFilters: () => void; // nova prop
};

export default function FilterMusiciansButton({
  onUndo,
  onApplyFilters,
  onResetFilters, // recebe a função de reset
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

      {/* Render modal only when open */}
      {open && (
        <FilterMusiciansModal
          onClose={() => setOpen(false)}
          onUndo={onUndo}
          onApplyFilters={(filters) => {
            onApplyFilters(filters);
            setOpen(false);
          }}
          onResetFilters={() => {
            onResetFilters();
            setOpen(false); // opcional: fecha o modal ao resetar
          }}
        />
      )}
    </>
  );
}

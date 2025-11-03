"use client";

import { useState } from "react";
import styles from "./ModalFiltersColaboration.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Icon from "@/components/ui/Icon/Icon";
import {
  FilterState,
  Genre,
  CollaborationType,
  Royalties,
  Deadline,
} from "@/types/ColaborationFilters";

interface ModalFiltersColaborationProps {
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
}

export default function ModalFiltersColaboration({
  onClose,
  onApplyFilters,
}: ModalFiltersColaborationProps) {
  const [filters, setFilters] = useState<FilterState>({
    genre: null,
    type: null,
    royalties: null,
    deadline: null,
  });

  const toggleFilter = <K extends keyof FilterState>(
    field: K,
    value: FilterState[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [field]: prev[field] === value ? null : value, // desmarca se clicar novamente
    }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const renderFilterGroup = (
    label: string,
    field: keyof FilterState,
    values: FilterState[keyof FilterState][],
    current: FilterState[keyof FilterState] | null
  ) => (
    <div className={styles.filter_group}>
      <h4 className={styles.group_title}>{label}</h4>
      <div className={styles.tags_row}>
        {values.map((val) => (
          <button
            key={val as string}
            type="button"
            className={`${styles.filter_tag} ${
              current === val ? styles.selected : ""
            }`}
            onClick={() => toggleFilter(field, val)}
          >
            {val}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h3>Filtrar Colaborações</h3>
          <button onClick={onClose} className={styles.close_btn}>
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className={styles.content}>
          {renderFilterGroup(
            "Gênero",
            "genre",
            Object.values(Genre),
            filters.genre ?? null
          )}
          {renderFilterGroup(
            "Tipo",
            "type",
            Object.values(CollaborationType),
            filters.type ?? null
          )}
          {renderFilterGroup(
            "Participação",
            "royalties",
            Object.values(Royalties),
            filters.royalties ?? null
          )}
          {renderFilterGroup(
            "Prazo",
            "deadline",
            Object.values(Deadline),
            filters.deadline ?? null
          )}
        </div>

        <div className={styles.actions}>
          <PrimaryButton content="Aplicar Filtros" onClick={handleApply} />
        </div>
      </div>
    </div>
  );
}

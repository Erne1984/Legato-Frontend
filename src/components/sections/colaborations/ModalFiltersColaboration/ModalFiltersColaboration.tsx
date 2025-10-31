"use client";

import { useState } from "react";
import styles from "./ModalFiltersColaboration.module.css";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";
import Icon from "@/components/ui/Icon/Icon";

interface ModalFiltersColaborationProps {
  onClose: () => void;
  onApplyFilters: (filters: FilterState) => void;
}

export interface FilterState {
  genre: string;
  type: string;
  royalties: string;
  deadline: string;
}

export default function ModalFiltersColaboration({
  onClose,
  onApplyFilters,
}: ModalFiltersColaborationProps) {
  const [filters, setFilters] = useState<FilterState>({
    genre: "",
    type: "",
    royalties: "",
    deadline: "",
  });

  const handleChange = (field: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

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
          <select
            value={filters.genre}
            onChange={(e) => handleChange("genre", e.target.value)}
          >
            <option value="">Gênero</option>
            <option value="rnb">R&B</option>
            <option value="rock">Rock</option>
            <option value="pop">Pop</option>
          </select>

          <select
            value={filters.type}
            onChange={(e) => handleChange("type", e.target.value)}
          >
            <option value="">Tipo</option>
            <option value="remote">Remoto</option>
            <option value="in-person">Presencial</option>
          </select>

          <select
            value={filters.royalties}
            onChange={(e) => handleChange("royalties", e.target.value)}
          >
            <option value="">Participação</option>
            <option value="royalties">Com royalties</option>
            <option value="no-royalties">Sem royalties</option>
          </select>

          <select
            value={filters.deadline}
            onChange={(e) => handleChange("deadline", e.target.value)}
          >
            <option value="">Prazo</option>
            <option value="7">Até 7 dias</option>
            <option value="30">Até 30 dias</option>
            <option value="60">Até 60 dias</option>
          </select>
        </div>

        <div className={styles.actions}>
          <PrimaryButton content="Aplicar Filtros" onClick={handleApply} />
        </div>
      </div>
    </div>
  );
}

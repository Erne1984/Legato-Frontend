"use client";

import React, { useState } from "react";
import { useSwipeHistory } from "@/context/SwipeHistoryContext";
import styles from "./SwipeHistoryModal.module.css";
import Icon from "@/components/ui/Icon/Icon";
import { CardType } from "@/types/cards";
import Image from "next/image";

export type SwipeEvent = {
  card: CardType;
  action: "match" | "pass";
  timestamp: Date;
};

type Props = {
  onClose: () => void;
  onUndo: (card: CardType) => void;
};

export default function SwipeHistoryModal({ onClose, onUndo }: Props) {
  const { history, removeSwipe } = useSwipeHistory();
  const [sortAscending, setSortAscending] = useState(false);

  const sortedHistory = [...(history as SwipeEvent[])].sort((a, b) =>
    sortAscending
      ? a.timestamp.getTime() - b.timestamp.getTime()
      : b.timestamp.getTime() - a.timestamp.getTime()
  );

  const groupedByDay = sortedHistory.reduce<Record<string, SwipeEvent[]>>(
    (acc, item) => {
      const day = item.timestamp.toLocaleDateString();
      if (!acc[day]) acc[day] = [];
      acc[day].push(item);
      return acc;
    },
    {}
  );

  const handleUndo = (event: SwipeEvent) => {
    removeSwipe(event);
    onUndo(event.card);
  };

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal_content}>
        <div className={styles.header}>
          <h2>Histórico de Descoberta</h2>
          <button className={styles.close_button} onClick={onClose}>
            <Icon name="close" className={styles.close_icon} />
          </button>
        </div>

        <div className={styles.sort_controls}>
          <button onClick={() => setSortAscending(!sortAscending)}>
            Ordenar:{" "}
            {sortAscending
              ? "Mais Antigo → Mais Recente"
              : "Mais Recente → Mais Antigo"}
          </button>
        </div>

        <div className={styles.history_list}>
          {Object.keys(groupedByDay).map((day) => (
            <div key={day} className={styles.day_section}>
              <h3>{day}</h3>
              {groupedByDay[day].map((item, index) => (
                <div key={index} className={styles.history_item}>
                  <Image src={item.card.image_profile.src} height={50} width={50} alt={item.card.name}  className={styles.profile_img} />
                  <div className={styles.item_info}>
                    <span className={styles.name}>{item.card.name}</span>
                    <span
                      className={
                        item.action === "match"
                          ? styles.match_status
                          : styles.pass_status
                      }
                    >
                      {item.action === "match" ? (
                        <>
                          <Icon name="link" className={styles.status_icon} />{" "}
                          Conexão
                        </>
                      ) : (
                        <>
                          <Icon name="close" className={styles.status_icon} />{" "}
                          Recusado
                        </>
                      )}
                    </span>

                    <span className={styles.timestamp}>
                      {item.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  <button
                    className={styles.undo_button}
                    onClick={() => handleUndo(item)}
                  >
                    Desfazer
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

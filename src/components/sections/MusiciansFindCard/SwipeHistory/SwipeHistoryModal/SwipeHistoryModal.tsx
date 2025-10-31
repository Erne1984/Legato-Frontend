"use client";

import React, { useState } from "react";
import { useSwipeHistory } from "@/context/SwipeHistoryContext";
import styles from "./SwipeHistoryModal.module.css"
import Icon from "@/components/ui/Icon/Icon";

type Props = {
  onClose: () => void;
  onUndo: (card: SwipeEvent["card"]) => void;
};

export default function SwipeHistoryModal({ onClose, onUndo }: Props) {
  const { history, removeSwipe } = useSwipeHistory();
  const [sortAscending, setSortAscending] = useState(false);

  //Sort history by timestamp
  const sortedHistory = [...history].sort((a, b) =>
    sortAscending
      ? a.timestamp.getTime() - b.timestamp.getTime()
      : b.timestamp.getTime() - a.timestamp.getTime()
  );

  //Group history by day
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
    //Remove from history
    removeSwipe(event);
    onUndo(event.card); 

    //TODO: Add the card back to stack in parent component
  }

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
            Ordenar: {sortAscending ? "Mais Antigo → Mais Recente" : "Mais Recente → Mais Antigo"}
          </button>
        </div>

        <div className={styles.history_list}>
          {Object.keys(groupedByDay).map((day) => (
            <div key={day} className={styles.day_section}>
              <h3>{day}</h3>
              {groupedByDay[day].map((item, index) => (
                <div key={index} className={styles.history_item}>
                  <img
                    src={item.card.image_profile.src}
                    alt={`${item.card.name} profile`}
                    className={styles.profile_img}
                  />
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
                          <Icon name="link" className={styles.status_icon} /> Conexão
                        </>
                      ) : (
                        <>
                          <Icon name="close" className={styles.status_icon} /> Recusado
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
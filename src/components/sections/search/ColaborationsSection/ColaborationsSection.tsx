"use client";

import styles from "./ColaborationsSection.module.css";
import ColaborationCard from "@/components/ui/ColaborationCard/ColaborationCard";

const collaborations = [
  {
    imageUrl: "https://picsum.photos/400/300",
    title: "Beat Lo-fi para colaboração",
    author: "user123",
    royalties: "Divisão 50/50",
    genres: "Lo-fi, Chill",
    remote: true,
    deadline: "15 dias restantes",
    timeAgo: "Publicado há 2h"
  },
  {
    imageUrl: "https://picsum.photos/400/301",
    title: "Projeto de trap experimental",
    author: "producer_k",
    royalties: "Sem royalties, apenas divulgação",
    genres: "Trap, Experimental",
    remote: false,
    deadline: "7 dias restantes",
    timeAgo: "Publicado há 5h"
  }
];

export default function ColaborationsSection() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Colaborações</h3>
        <span className={styles.view_all}>Ver todas</span>
      </div>

      <div className={styles.list}>
        {collaborations.map((item, index) => (
          <ColaborationCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

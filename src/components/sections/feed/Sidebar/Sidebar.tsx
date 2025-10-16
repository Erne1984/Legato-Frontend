"use client";

import { useState } from "react";
import Icon, { IconName } from "@/components/ui/Icon/Icon";
import styles from "./Sidebar.module.css";

type MenuItem = {
  key: string;
  icon: IconName; 
};

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState("Em Destaque");

  const menuItems: MenuItem[] = [
    { key: "Em Destaque", icon: "flame" },
    { key: "Seguindo", icon: "users" },
    { key: "Músicas", icon: "music" },
    { key: "Vídeos", icon: "camera" },
  ];

  return (
    <aside className={styles.container}>
      {menuItems.map((item) => (
        <div
          key={item.key}
          className={`${styles.menu_item} ${
            activeItem === item.key ? styles.active : ""
          }`}
          onClick={() => setActiveItem(item.key)}
        >
          <Icon name={item.icon} className={styles.icon} />
          <span>{item.key}</span>
        </div>
      ))}
    </aside>
  );
}

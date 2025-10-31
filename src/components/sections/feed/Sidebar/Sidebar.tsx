"use client";

import { useState } from "react";
import Icon, { IconName } from "@/components/ui/Icon/Icon";
import styles from "./Sidebar.module.css";

type MenuItem = {
  key: string;
  icon: IconName;
  label: string;
};

type SidebarProps = {
  tab: string;
}

export default function Sidebar({ tab }: SidebarProps) {
  const [activeItem, setActiveItem] = useState(tab);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { key: "Em Destaque", icon: "flame", label: "Em Destaque" },
    { key: "Seguindo", icon: "users", label: "Seguindo" },
    { key: "Músicas", icon: "music", label: "Músicas" },
    { key: "Vídeos", icon: "camera", label: "Vídeos" },
  ];

  const handleItemClick = (key: string) => {
    setActiveItem(key);
    setIsMobileMenuOpen(false);
  };

  const activeItemLabel = menuItems.find(item => item.key === activeItem)?.label || "Em Destaque";

  return (
    <>
      {/* Menu Mobile */}
      <div className={styles.mobile_menu}>
        <button
          className={styles.mobile_menu_button}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span>{activeItemLabel}</span>
          {isMobileMenuOpen ? 
            <Icon name="arrowUp" size={20} /> : 
            <Icon name="arrowDown" size={20} />
          }
        </button>

        {isMobileMenuOpen && (
          <div className={styles.mobile_menu_dropdown}>
            {menuItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleItemClick(item.key)}
                className={`${styles.mobile_menu_item} ${
                  activeItem === item.key ? styles.selected_item : ""
                }`}
              >
                <Icon name={item.icon} className={styles.mobile_icon} />
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Sidebar Desktop */}
      <aside className={styles.container}>
        <div className={styles.content}>
          {menuItems.map((item) => (
            <div
              key={item.key}
              className={`${styles.menu_item} ${
                activeItem === item.key ? styles.active : ""
              }`}
              onClick={() => handleItemClick(item.key)}
            >
              <Icon name={item.icon} className={styles.icon} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./ProfileTabs.module.css";
import Icon from "@/components/ui/Icon/Icon";

const tabs = [
  { key: "overview", label: "Visão Geral" },
  { key: "activity", label: "Atividade" },
  { key: "musics", label: "Músicas" },
  { key: "videos", label: "Vídeos" },
  { key: "collaborations", label: "Colaborações" },
];

export default function ProfileTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTabChange = (key: string) => {
    router.replace(`?tab=${key}`);
    setIsMenuOpen(false);
  };

  const activeTabLabel =
    tabs.find((tab) => tab.key === activeTab)?.label || "Visão Geral";

  return (
    <nav className={styles.container_profile_tabs}>
      {/* Menu Mobile */}
      <div className={styles.mobile_menu}>
        <button
          className={styles.mobile_menu_button}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {activeTabLabel}
          {isMenuOpen ? <Icon name="arrowUp"  size={20}/> : <Icon name="arrowDown"  size={20}/>}
        </button>

        {isMenuOpen && (
          <div className={styles.mobile_menu_dropdown}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`${styles.mobile_menu_item} ${
                  activeTab === tab.key ? styles.selected_item : ""
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Menu Desktop */}
      <ul className={styles.desktop_menu}>
        {tabs.map((tab) => (
          <li
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`${styles.tab} ${
              activeTab === tab.key ? styles.selected_item : ""
            }`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}

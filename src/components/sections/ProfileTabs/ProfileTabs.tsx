"use client";


import { useRouter, useSearchParams } from "next/navigation";
import styles from "./ProfileTabs.module.css";

const tabs = [
  { key: "overview", label: "Visão Geral" },
  { key: "activity", label: "Atividade" },
  { key: "portfolio", label: "Portfólio" },
  { key: "collaborations", label: "Colaborações" },
];

export default function ProfileTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get("tab") || "overview";

  const handleTabChange = (key: string) => {
    router.replace(`?tab=${key}`);
  };

  return (
    <nav className={styles.container_profile_tabs}>
      <ul>
        {tabs.map((tab) => (
          <li
            key={tab.key}
            onClick={() => handleTabChange(tab.key)}
            className={`${styles.tab} ${activeTab === tab.key ? styles.selected_item : ""}`}
          >
            {tab.label}
          </li>
        ))}

      </ul>
    </nav>
  );
}

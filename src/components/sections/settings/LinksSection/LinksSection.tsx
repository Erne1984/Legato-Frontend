"use client";

import { useState } from "react";
import InputField from "@/components/ui/InputField/InputField";
import styles from "./LinksSection.module.css";

export default function LinksSection() {
  const [links, setLinks] = useState([
    { label: "Instagram", placeholder: "Adicionar URL de perfil", value: "" },
    { label: "TikTok", placeholder: "Adicionar URL de perfil", value: "" },
    { label: "Spotify", placeholder: "Adicionar URL de perfil", value: "" },
    { label: "YouTube", placeholder: "Adicionar URL de canal", value: "" },
    {
      label: "SoundCloud",
      placeholder: "Adicionar URL de perfil",
      value: "https://soundcloud.com/arthur-reali-fabiano",
    },
    { label: "Site", placeholder: "Adicionar URL de site pessoal", value: "" },
  ]);

  const handleChange = (index: number, newValue: string) => {
    const updated = [...links];
    updated[index].value = newValue;
    setLinks(updated);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Links</h2>

      <div className={styles.fields}>
        {links.map((link, index) => (
          <InputField
            key={index}
            label={link.label}
            name={link.label.toLowerCase()}
            placeholder={link.placeholder}
            value={link.value}
            onChange={(e) => handleChange(index, e.target.value)}
            fullWidth
          />
        ))}
      </div>
    </div>
  );
}

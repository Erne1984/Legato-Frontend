"use client";

import { useState } from "react";
import InputField from "@/components/ui/InputField/InputField";
import styles from "./LinksSection.module.css";

type LinksSectionProps = {
  instagramLink?: string;
  spotifyLink?: string;
  youtubeLink?: string;
  soundcloudLink?: string;
  websiteLink?: string;
  onChange: (links: {
    instagram: string;
    spotify: string;
    youtube: string;
    soundcloud: string;
    website: string;
  }) => void;
};


export default function LinksSection(props: LinksSectionProps) {
  const getValue = (value?: string) => {
    return value || "";
  };

  const [links, setLinks] = useState([
    { label: "Instagram", placeholder: "Adicionar URL de perfil", value: getValue(props.instagramLink) },
    { label: "Spotify", placeholder: "Adicionar URL de perfil", value: getValue(props.spotifyLink) },
    { label: "YouTube", placeholder: "Adicionar URL de canal", value: getValue(props.youtubeLink) },
    {
      label: "SoundCloud",
      placeholder: "Adicionar URL de perfil",
      value: getValue(props.soundcloudLink),
    },
    { label: "Site", placeholder: "Adicionar URL de site pessoal", value: getValue(props.websiteLink) },
  ]);

  const handleChange = (index: number, newValue: string) => {
    const updated = [...links];
    updated[index].value = newValue;
    setLinks(updated);

    props.onChange({
      instagram: updated[0].value,
      spotify: updated[1].value,
      youtube: updated[2].value,
      soundcloud: updated[3].value,
      website: updated[4].value,
    });
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

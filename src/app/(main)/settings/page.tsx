"use client";

import { useMe } from "@/hooks/useUser";
import SettingsContent from "@/components/sections/settings/SettingsContent/SettingsContent";
import { useEffect } from "react";
import styles from "./settings.module.css"

export default function SettingsPage() {
  const { data: meData, isLoading, error } = useMe();

  useEffect(() => {
    console.log(meData)
  }, [meData])

  if (isLoading) return <p>Carregando...</p>;

  if (error) {
    const status = error.message

    return (
      <div style={{ padding: 24 }}>
        <h2>Você não está autenticado</h2>
        <p>Faça login para acessar as configurações.</p>
        <p> {status}</p>
      </div>
    );
  }

  const me = meData?.data;
  if (!me) {
    return <p>Não foi possível identificar seu usuário.</p>;
  }

  return (
    <div className={styles.container_settings_wrapper}>
 
      <SettingsContent me={me} />;

    </div>

  )


}



"use client";

import { useRouter } from "next/navigation";
import PrimaryButton from "../../../ui/PrimaryButton/PrimaryButton";
import styles from "./Hero.module.css";

export default function Hero() {
  const router = useRouter();

  const navigateToSignup = () => {
    router.push("/signup");
  };

  return (
    <div className={styles.container_hero}>
      <div className={styles.call_to_action_box}>
        <h1>Conecte-se através da música</h1>
        <p className={styles.all_white}>
          Encontre parceiros musicais, forme bandas, participe de jam sessions e
          colabore com artistas que compartilham da sua paixão pela música.
        </p>

        <PrimaryButton
          content="Descobrir músicos"
          size="large"
          onClick={navigateToSignup}
        />
      </div>

      <div className={styles.metrics}>
        <span>
          <strong>10k+</strong> <span className={styles.all_white}>músicos ativos</span>
        </span>
        <span>
          <strong>500+</strong> <span className={styles.all_white}>bandas formadas</span>
        </span>
        <span>
          <strong>1k+</strong> <span className={styles.all_white}>jam sessions</span>
        </span>
      </div>
    </div>
  );
}

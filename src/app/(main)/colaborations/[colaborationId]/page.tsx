"use client";

import Image from "next/image";
import styles from "./colaboration_details_page.module.css";
import Icon from "@/components/ui/Icon/Icon";
import PrimaryButton from "@/components/ui/PrimaryButton/PrimaryButton";

export default function ColaborationDetailsPage() {

  const colab = {
    imageUrl:
      "https://gruvgear.com/cdn/shop/articles/Guthrie_Govan_1200x.png?v=1600277480",
    title: "Looking for a producer to make 1 R&B track",
    author: "Erne",
    royalties: "% of royalties, % of publishing",
    genres: "R&B / Soul, House",
    remote: true,
    deadline: "Needed within 25 days",
    description:
      "Busco um produtor musical para colaborar na criação de uma faixa R&B/Soul. Já possuo uma linha de voz e base harmônica. A ideia é finalizar a produção e preparar para distribuição digital. Aberto a colaborações criativas e sugestões de arranjo.",
  };

  return (
    <div className={styles.container_colaboration_wrapper}>
      <div className={styles.container_main_content}>
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <Image
              src={colab.imageUrl}
              alt={colab.title}
              fill
              className={styles.cover}
            />
          </div>

          <div className={styles.info}>
            <h1 className={styles.title}>{colab.title}</h1>
            <p className={styles.author}>por {colab.author}</p>

            <div className={styles.details}>
              <div className={styles.detailItem}>
                <Icon name="music" size={18} />
                <span>{colab.genres}</span>
              </div>

              <div className={styles.detailItem}>
                <Icon name="users" size={18} />
                <span>{colab.royalties}</span>
              </div>

              {colab.remote && (
                <div className={styles.detailItem}>
                  <Icon name="mapPin" size={18} />
                  <span>Remoto</span>
                </div>
              )}

              <div className={styles.detailItem}>
                <Icon name="clock" size={18} />
                <span>{colab.deadline}</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Sobre esta colaboração</h2>
          <p>{colab.description}</p>
        </div>

        <div className={styles.section_button}>
          <PrimaryButton content="Entrar em contato" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}
